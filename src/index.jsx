import React from "react";
import ReactDOM from "react-dom";
const AmazonCognitoIdentity = require("amazon-cognito-auth-js");

const apiURL = process.env.ApiRoot;

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      summary: "",
      city: "Helsinki, Finland",
      auth: "",
      idToken: "",
    };
  }

  async getWeatherFromApi(auth) {

    const idToken = auth.signInUserSession.getIdToken().getJwtToken();
    console.log("sending  api with this id token", idToken);
    try {
      const response = await fetch(`${apiURL}/weather`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      });

      console.log("got this response from api ", response);
      return response.json();
    } catch (error) {
      console.error("got this erro after calling api", error);
    }

    return {};
  }

  async componentDidMount() {
    // Initiatlize CognitoAuth object
    var auth = await this.initCognitoSDK();

    document.getElementById("signInButton").addEventListener("click", () => {
      if (this.state.idToken) {
        document.getElementById("signInButton").innerHTML = "Sign Out";
        auth.signOut();
      } else {
        auth.getSession();
      }
    });

    var curUrl = window.location.href;
    auth.parseCognitoWebResponse(curUrl);
  }

  componentDidUpdate(input) {
    if (this.state.idToken) {
      document.getElementById("signInButton").innerHTML = "Sign Out";
    } else {
      document.getElementById("signInButton").innerHTML = "Sign In";
    }
  }

  // Initialize a cognito auth object.
  initCognitoSDK() {
    console.log("inside initCognitoSDK");
    const authData = {
      ClientId: process.env.UserPoolAppClientId, // Your client id here
      AppWebDomain: process.env.UserPoolDomain, // Exclude the "https://" part.
      TokenScopesArray: ["email", "profile", "openid"], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
      RedirectUriSignIn: process.env.RedirectUriSignIn,
      RedirectUriSignOut: process.env.RedirectUriSignOut,
      UserPoolId: process.env.UserPoolId, // Your user pool id here
    };

    const auth = new AmazonCognitoIdentity.CognitoAuth(authData);
    // You can also set state parameter
    // auth.setState(<state parameter>);
    auth.userhandler = {
      onSuccess: (result) => {
        console.log("successfully signed in, setting state");

        this.setState({
          auth: auth,
          idToken: result.getIdToken().getJwtToken(),
        });

        console.log(
          "after setting this.state.idToken, it  is ",
          this.state.idToken
        );
        this.callApi(auth);
      },
      onFailure: (err) => {
        alert(`Error!${err}`);
      },
    };
    // The default response_type is "token", uncomment the next line will make it be "code".
    auth.useCodeGrantFlow();
    return auth;
  }

  async callApi(auth) {
    console.log("inside callApi");
    const data = await this.getWeatherFromApi(auth);

    console.log("got this data from api ", data);
    const icon = data.weather[0].icon;
    const city = this.state.city;
    this.setState({
      icon: icon.slice(0, -1),
      summary: data.main,
    });
  }

  render() {
    const { icon, summary, city } = this.state;

    return (
      <div className="weather">
        <button id="signInButton">Sign in to get the weather</button>

        <div className="icon">{icon && <img src={`/img/${icon}.svg`} />}</div>
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById("app"));

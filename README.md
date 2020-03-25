
# Production Ready Serverless Ops Bolerplate - Frontend


This is the second part of [the boilerplate](https://github.com/eficode/serverless-ops-boilerplate). This app uses Amazon cognito [Hosted UI](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html) for sign-inand sign-up. This app leverages [Weatherapp](https://github.com/mrako/weatherapp) as well as  [Amazon Cognito Auth SDK for JavaScript](https://www.npmjs.com/package/amazon-cognito-auth-js) to handle authentication. To make the application work, user needs supply following environmental variables:

    UserPoolAppClientId, UserPoolDomain, RedirectUriSignIn, RedirectUriSignOut, UserPoolId

These environmental variables supply Amazon Cognito details and will be used by `initCognitoSDK()` located `./src/index.jsx` file. If you follow the instructions on [the boilerplate](https://github.com/eficode/serverless-ops-boilerplate), the template creates frontend pipeline and supplies these environmental variables into the corresponding Codebuild project. So you don't need to do anything manual. However, you can set these variables on your machine to test the authentication locally. To do that, you need to set RedirectUriSignIn, RedirectUriSignOut to `http://localhost:8000`. Also you need to whitelist `http://localhost:8000` in [Callback URL and Logout URL of your Cognito User Pool app](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-idp-settings.html). Then you can run the application and it should work:

    npm install

    npm start


Once the app is running, you need to press the button "Sin-in to get the weather":

![Sign in button](https://user-images.githubusercontent.com/21277296/77577864-3a6a5c00-6ee0-11ea-845f-b5353bfdb07a.png)


The app will redirect you to Cognito hosted UI. For troubleshooting, you can also access hosted UI [manually](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html) with following URL:

    https://<your_domain>/login?response_type=code&client_id=<your_app_client_id>&redirect_uri=<your_callback_url>

You can get your domain, user pool app client id and callback url from cloudformation output of the app created [by backend pipeline](https://github.com/eficode/serverless-ops-boilerplate) (i.e. `app/template.yaml`).

Create a new user in Cognito user pool, if you havn't yet, so you can sign-in:

![Cognito hosted UI](https://user-images.githubusercontent.com/21277296/77577849-33dbe480-6ee0-11ea-958f-8544a68b5f02.png)


 Then you can see weather report; something like this:

![Weather report after sign in](https://user-images.githubusercontent.com/21277296/77543316-31619680-6eb0-11ea-9e95-c491d943fe7d.png)








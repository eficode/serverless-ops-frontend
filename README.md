
# Production Ready Serverless Ops Bolerplate - Frontend


This is the second part of [the boilerplate](https://github.com/azarboon/serverless-ops-boilerplate). This app uses Amazon cognito [Hosted UI](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html) for sign-inand sign-up. This app leverages [Weatherapp](https://github.com/mrako/weatherapp) as well as  [Amazon Cognito Auth SDK for JavaScript](https://www.npmjs.com/package/amazon-cognito-auth-js) to handle authentication. To make the application work, user needs supply following environmental variables:

    UserPoolAppClientId, UserPoolDomain, RedirectUriSignIn, RedirectUriSignOut, UserPoolId

These environmental variables supply Amazon Cognito details and will be used by `initCognitoSDK()` located `./src/index.jsx` file. If you follow the instructions on [the boilerplate](https://github.com/azarboon/serverless-ops-boilerplate), the template creates frontend pipeline and supplies these environmental variables into the corresponding Codebuild project. So you don't need to do anything manual. However, you can set these variables on your machine to test the authentication locally. To do that, you need to set RedirectUriSignIn, RedirectUriSignOut to `http://localhost:8000`. Also you need to whitelist `http://localhost:8000` in [Callback URL and Logout URL of your Cognito User Pool app](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-idp-settings.html). Then you can run the application and it should work:

    npm install

    npm start


Once the app is running, you need to press the button "Sin-in to get the weather". The app will redirect you to Amazon hosted UI. Create a new user in Cognito user pool, if you havn't yet, so you can sign-in. Then you can see weather report; something like this:

![Weather report after sign in](https://user-images.githubusercontent.com/21277296/77543316-31619680-6eb0-11ea-9e95-c491d943fe7d.png)








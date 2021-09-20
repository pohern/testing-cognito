import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_d4wLKW90h",
  ClientId: "2d2qj0h0olkgsskrddme73on64",
};


export default new CognitoUserPool(poolData);

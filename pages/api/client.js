import { SNSClient } from "@aws-sdk/client-sns";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "../../node_modules/@aws-sdk/credential-provider-cognito-identity";

// Set the AWS Region.
const snsClient = new SNSClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
    }),
    identityPoolId: process.env.NEXT_PUBLIC_AWS_INDENTITY_POOL, // IDENTITY_POOL_ID
  }),
});
// Create SNS service object.
export { snsClient };

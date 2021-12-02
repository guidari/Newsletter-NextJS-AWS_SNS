import { SNSClient } from "@aws-sdk/client-sns";

// Create SNS service object.
const snsClient = new SNSClient({ region: process.env.NEXT_PUBLIC_AWS_REGION });
export { snsClient };

// Import required AWS SDK clients and commands for Node.js
import { SubscribeCommand } from "../node_modules/@aws-sdk/client-sns";
import { snsClient } from "./api/client.js";

export default function Home() {
  // Set the parameters
  const params = {
    Protocol: "email" /* required */,
    TopicArn: process.env.NEXT_PUBLIC_AWS_TOPIC_ARN, //TOPIC_ARN
    Endpoint: "wabiv63525@sinagalore.com", //EMAIL_ADDRESS
  };

  const run = async () => {
    try {
      const data = await snsClient.send(new SubscribeCommand(params));
      console.log("Success.", data);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err.stack);
    }
  };
  run();

  return (
    <div className="main">
      <img src="images/me.png" width="80px" />
      <h1>Tech news to make your time worth</h1>
      <p>
        Be part of our community with
        <strong>
          <span id="SubscribeNumbers"> 3</span> active readers
        </strong>
      </p>
      <input id="userEmail" type="email" placeholder="✉ Type your email" />
      <button>Sign up</button>
    </div>
  );
}

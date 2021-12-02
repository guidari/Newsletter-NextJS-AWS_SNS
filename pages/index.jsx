// Import required AWS SDK clients and commands for Node.js
import { SubscribeCommand } from "../node_modules/@aws-sdk/client-sns";
import { snsClient } from "./api/client.js";

export default function Home() {
  async function Register() {
    const email = document.querySelector("#userEmail").value;

    const params = {
      Protocol: "email" /* required */,
      TopicArn: process.env.NEXT_PUBLIC_AWS_TOPIC_ARN, //TOPIC_ARN
      Endpoint: email, //EMAIL_ADDRESS
    };

    try {
      const data = await snsClient.send(new SubscribeCommand(params));
      alert("Your email was successfully sign up!");
      document.querySelector("#userEmail").innerHTML = "";
      console.log("Success.", data);
      return data; // For unit tests.
    } catch (err) {
      alert("Type a valid email address!");
      console.log("Error", err.stack);
    }
  }

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
      <button onClick={() => Register()}>Sign up</button>
    </div>
  );
}

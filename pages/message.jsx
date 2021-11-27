export default function Message() {
  return (
    <div className="main">
      <h1>Write your message</h1>
      <textarea cols="50" rows="2" placeholder="Subject" type="text" />
      <br />
      <textarea cols="50" rows="10" placeholder="Message" id="message" />
      <br />
      <button>Send Message</button>
    </div>
  );
}

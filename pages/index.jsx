export default function Home() {
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

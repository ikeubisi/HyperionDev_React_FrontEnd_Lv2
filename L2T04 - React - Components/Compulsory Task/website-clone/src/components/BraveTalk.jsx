export default function BraveTalk({ title }) {
  return (
    <div className="section-box">
      {/* <div id="talk-logo"></div> */}
      <h1>{title}</h1>
      <p id="intro" className="fw-600">
        Encrypted video calls. Right in your browser.
      </p>
      <button className="button-disabled">
        Start free call (up to 4 people)
      </button>
    </div>
  );
}

// destruct the props so I don't need to use the word "props" as a param
export default function Footer({ policy, status }) {
  return (
    <footer>
      Download the
      <a
        href="https://chrome.google.com/webstore/detail/brave-talk-for-google-cal/nimfmkdcckklbkhjjkmbjfcpaiifgamg"
        target="_blank"
      >
        {" "}
        Brave Talk extension for Google Calendar
      </a>
      .<br /> Your personal info stays private while using Brave Talk, per our{" "}
      <a
        href="https://brave.com/privacy/browser/#brave-talk-learn"
        target="_blank"
      >
        {policy}
      </a>
      .{" "}
      <a href="https://status.brave.com/" target="_blank">
        {status}
      </a>
      .
    </footer>
  );
}

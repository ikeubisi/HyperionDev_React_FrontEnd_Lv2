import PropTypes from "prop-types";

// destruct the props so I don't need to use the word "props" as a param
export default function Footer({ policy, status }) {
  return (
    <footer>
      Download the
      <a
        href="https://chrome.google.com/webstore/detail/brave-talk-for-google-cal/nimfmkdcckklbkhjjkmbjfcpaiifgamg"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Brave Talk extension for Google Calendar
      </a>
      .<br /> Your personal info stays private while using Brave Talk, per our{" "}
      <a
        href="https://brave.com/privacy/browser/#brave-talk-learn"
        target="_blank"
        rel="noreferrer"
      >
        {policy}
      </a>
      .{" "}
      <a href="https://status.brave.com/" target="_blank" rel="noreferrer">
        {status}
      </a>
      .
    </footer>
  );
}

Footer.propTypes = {
  policy: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

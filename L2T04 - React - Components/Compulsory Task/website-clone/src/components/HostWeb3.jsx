export default function HostWeb3({ title }) {
  return (
    <div className="section-box">
      <h3>{title}</h3>
      <p>
        Use NFTs and POAPs to token-gate access, configure avatars, assign
        moderators, and more.
      </p>
      <button className="mb-2">
        <a href="https://account.brave.com/account/?intent=recover&product=talk"></a>
        Sign up to host a Web3
      </button>
      <p>
        Call Brave Talk premium subscription required for Web3 calls. Already
        have premium? Learn more about Web3 Talk calls.
      </p>
    </div>
  );
}

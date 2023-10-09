export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Welcome to our store where you will find the highest quality products
        for the lowest prices.
      </p>
      <h3>Please contact us at:</h3>
      <div className="card mb-1">
        <div className="card-body">
          <ul>
            <li className="mb-2">
              <a href="mailto:reactRouterStore@gmail.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                reactRouterStore@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href="tel:+440022334455">
                <i className="fa-solid fa-phone"></i>&nbsp; +440022334455
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

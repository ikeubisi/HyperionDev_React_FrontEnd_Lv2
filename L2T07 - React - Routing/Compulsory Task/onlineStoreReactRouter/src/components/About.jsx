// Learning about Figure from
// Figures (no date) React Bootstrap. Available at: https://react-bootstrap.github.io/docs/components/figures/
// (Accessed: 09 October 2023).
import Figure from "react-bootstrap/Figure";
import storeLogo from "../assets/storeLogo.png";
import oldStore from "../assets/oldStore.jpg";
import store from "../assets/store.jpg";
import { FigureImage } from "react-bootstrap";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className="d-flex justify-content-center">
        <Figure>
          <Figure.Image
            width={200}
            height={200}
            alt="store logo"
            src={storeLogo}
          />
          <Figure.Caption>
            <div className="card mb-1">
              <div className="card-body">
                <p>
                  Welcome to our store where you will find the highest quality
                  products for the lowest prices. We offer the best kitchen
                  items in the entire World!
                </p>
              </div>
            </div>
            <h3>Us Then</h3>
            <FigureImage width={480} alt="old store" src={oldStore} />
            <h3>Us Now</h3>
            <FigureImage width={480} alt="modern store" src={store} />
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
          </Figure.Caption>
        </Figure>
      </div>
    </>
  );
}

import Figure from "react-bootstrap/Figure";
import { FigureImage } from "react-bootstrap";
import oldStore from "../assets/storeHomepage.jpg";

export default function Home() {
  return (
    <>
      <h1 className="mb-3">Welcome to The React Router Store</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <Figure>
          <Figure.Caption>
            <h3 className="mb-3">
              The highest quality products for the lowest prices.
            </h3>
            <FigureImage width={480} alt="the store" src={oldStore} />
          </Figure.Caption>
        </Figure>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function TotalPrice() {
  let totalPrice = 1;

  const nav = useNavigate();

  // Hide total price if nothing has been bought
  return <>{totalPrice > 0 && <h2>TotalPrice £{totalPrice}</h2>}</>;
}

export default function TotalPrice() {
  const localPrice = localStorage.getItem("localPrice");

  // Hide total price if nothing has been bought
  return (
    <>{localPrice > 0 && <h2 id="totalPrice">Total Price £{localPrice}</h2>}</>
  );
}

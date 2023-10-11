export default function TotalPrice() {
  const localPrice = localStorage.getItem("localPrice");

  // Clear local storage (alternate solution would be to set localPrice to zero but it's the only thing we're storing)
  function clearPrice() {
    localStorage.clear();
    // Refresh the page
    location.reload();
  }
  // Hide total price if nothing has been bought
  return (
    <div>
      {localPrice > 0 && (
        <div id="priceSection">
          <h2 id="totalPrice">Total Price £{localPrice}</h2>{" "}
          <button
            id="clearBtn"
            className="btn btn-danger m-3"
            onClick={clearPrice}
          >
            Clear Price
          </button>
        </div>
      )}
    </div>
  );
}

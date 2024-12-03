import "../assets/CSS/layout.css";

export default function Product({ key, product, setCart, setTotal }) {
  return (
    <div className="grid-item" key={key}>
      <div class="card">
        <img
          src={require(`../assets/image/${product.img}`)}
          alt={product.name}
        />
        <div class="card-body">
          <h5 class="card-title">{product.name} Price:</h5>
          <div class="quantity-container">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" />
          </div>
          <button class="card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

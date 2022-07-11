import axios from "axios";
export default async function getProductList() {
  try {
    const response = await axios.get(
      "https://projeto14-triggo-back.herokuapp.com/products"
    );
    return { response };
  } catch {}
}

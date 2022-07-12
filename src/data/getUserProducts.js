import axios from "axios";
export default async function getProductList(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://projeto14-triggo-back.herokuapp.com/buy",
      config
    );
    return { response };
  } catch {}
}

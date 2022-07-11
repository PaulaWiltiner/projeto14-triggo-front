import axios from "axios";
export default async function logout(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(
      `https://projeto14-triggo-back.herokuapp.com/logout`,
      config
    );
    return { status: true };
  } catch {
    return { status: false };
  }
}

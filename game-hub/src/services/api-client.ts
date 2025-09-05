import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b0f4e193ed14e81913d8f54526de649",
  },
});

import axios from "axios";

const instance = axios.create({ baseURL: "https://jvsea.herokuapp.com/" });

instance.interceptors.request.use((what) => {
  what.headers.common["x-access-token"] = JSON.parse(
    localStorage.getItem("token")
  );
  return what;
});

export default instance;

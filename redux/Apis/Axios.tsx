import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3000/api/v1/auth"
});

export default Axios;
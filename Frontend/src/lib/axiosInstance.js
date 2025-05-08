import axios from "axios";
const axioInstance = axios.create(
    {
        baseURL: "http://localhost:3001/api/v1",
        withCredentials: true
    }
)
export default axioInstance
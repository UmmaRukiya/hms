import axios from "axios";

export default axios.create({
    baseURL: ` ${process.env.REACT_APP_BACKEND_URL}/api`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Accept": "application/json",
        "Content-Type": "multipart/form-data"
    }
})
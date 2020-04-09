import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            "Content-Type": "applications/json",
            Authorization: token
        }
    });
};
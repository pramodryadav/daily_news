import axios from "axios";
import Appconfig from "../config";

const instance = axios.create({
    baseURL: Appconfig.baseUrl,
    timeout: 5000, // set timeout to 10 seconds
    headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.VITE_NEWS_API_KEY
    }
});

const fetchNews = async (path: string, queryParams: object) => {
    try {
        let res = await instance.get(path, {
            params: queryParams
        });
        return res;
    } catch (error) {
        throw error;
    }

}

export { fetchNews }



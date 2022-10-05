import axios from "axios";
import { parseCookies } from 'nookies';

const cookies = parseCookies();

export const api = axios.create({
    baseURL: process.env.API_PORT,
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
});
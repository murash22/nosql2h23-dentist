import axios, {AxiosResponse} from "axios"
import { Endpoints } from "./endpoints.ts";

const API_URL = "http://localhost:1234/api/"




export const loginRequest = (username: string, password: string): Promise<AxiosResponse<any, any>> => {
  const data = {
    "login": username,
    "password": password
  }
  return axios({
    url: API_URL + Endpoints.login,
    method: 'POST',
    data
  })
}

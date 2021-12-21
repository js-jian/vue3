import axios from "./axios"

export default class User {
  static apiPath = {
    login: "/api/user/login"
  }

  static login = async (data) => {
    const url = User.apiPath.login
    const response = await axios.post(url, data)

    return response
  }
}
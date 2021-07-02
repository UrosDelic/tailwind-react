import axios from "axios";

class GetData {
  async getUserData(id) {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getUsersData() {
    try {
      const response = await axios.get("https://reqres.in/api/users/");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async postRegisterData(data) {
    try {
      const response = await axios.post("https://reqres.in/api/register", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async postLoginData(data) {
    try {
      const response = await axios.post("https://reqres.in/api/login", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
const getData = new GetData();
export default getData;

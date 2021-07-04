import axios from "axios";

class GetData {
  async getUserData(id) {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error, 'getData from getData.js');
    }
  }

  async getUsersData() {
    try {
      const response = await axios.get("https://reqres.in/api/users/");
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error, "getUsersData from getData.js");
    }
  }
  async postRegisterData(data) {
    try {
      const response = await axios.post("https://reqres.in/api/register", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error, "postRegisterData method");
    }
  }
  async postLoginData(data) {
    try {
      const response = await axios.post("https://reqres.in/api/login", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error, 'postLoginData');
    }
  }
}
const getData = new GetData();
export default getData;

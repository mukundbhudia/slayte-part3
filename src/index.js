const axios = require("axios");

const API_ENDPOINT = "https://air-qual-api.herokuapp.com/";

const loadInstance = async () => {
  let response = null;
  try {
    response = await axios.put(API_ENDPOINT, {
      params: {
        payload: "test"
      }
    });
  } catch (error) {
    console.error(error);
  }
  if (response) {
    console.log(response.data);
  }
};

loadInstance();

const axios = require("axios");

const makeDeleteRequest = async (endpoint, payload) => {
  let response = null;
  try {
    response = await axios.delete(endpoint, {
      params: {
        payload
      }
    });
  } catch (error) {
    response = "Error";
  }

  return response && response.data;
};

const makePutRequest = async (endpoint, payload) => {
  let response = null;
  try {
    response = await axios.put(endpoint, {
      params: {
        payload
      }
    });
  } catch (error) {
    response = "Error";
  }

  return response && response.data;
};

const handle = async (endpoint, payload, httpVerb) => {
  let retries = 0;
  while (retries < 3) {
    let response = null;
    if (httpVerb && httpVerb === "delete") {
      response = await makeDeleteRequest(endpoint, payload);
    } else {
      response = await makePutRequest(endpoint, payload);
    }
    if (response) {
      return "SUCCESS";
    } else {
      retries++;
    }
  }
  return "FAILED";
};

module.exports = {
  handle
};

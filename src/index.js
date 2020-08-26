const axios = require("axios");

const API_ENDPOINT = "https://air-qual-api.herokuapp.com/";
const API_RESOURCE_1 = "/api/resource1";
// const API_RESOURCE_2 = "/api/resource2";

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

const handleResource = async (endpoint, payload) => {
  let retries = 0;
  while (retries < 3) {
    const response = await makePutRequest(endpoint, payload);
    if (response) {
      return "SUCCESS";
    } else {
      retries++;
    }
  }
  return "FAILED";
};

const updateRemoteApi = async () => {
  const resource1 = await handleResource(API_ENDPOINT, "new1");
  const resource2 = await handleResource(API_ENDPOINT, "new2");
  if (resource2 === "FAILED") {
    makeDeleteRequest(API_RESOURCE_1, "new2");
  }
  console.log(resource1, resource2);
};

updateRemoteApi();

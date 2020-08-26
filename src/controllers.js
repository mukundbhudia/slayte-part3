const { handle } = require("./handler");

const API_RESOURCE_1 = "/api/resource1";
const API_RESOURCE_2 = "/api/resource2";

const updateRemoteApi = async () => {
  const resource1 = await handle(API_RESOURCE_1, "new1", "put");
  const resource2 = await handle(API_RESOURCE_2, "new2", "put");
  if (resource2 === "FAILED") {
    handle(API_RESOURCE_1, "new2", "delete");
  }
  console.log(resource1, resource2);
};

module.exports = {
  updateRemoteApi
};


var axios = require("axios");
const API = (callback) => {

  var config = {
    method: 'get',
    url: 'http://localhost:8080/brands/getbrands',
    headers: { Authorization: "Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==", }
  };

  axios(config)
    .then(function (response) {

      callback(response.data)
    })
    .catch(function (error) {

      callback(error)
    });

};

module.exports = API;
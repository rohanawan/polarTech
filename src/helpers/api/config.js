
const Config = (methodType, endpoint) => {
  var config = {
    method: methodType,
    url: `${process.env.React_App_BASE_URL}${endpoint}`,
  };

  return config;
};

export default Config
const cors = require("cors");

const whitelist = ["http://localhost:3000", "https://localhost:3443"];
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  console.log(req.header("Origin"));
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

exports.cors = cors(); //when we call cors, it will return a mdlewre fx to configure a cors header allow-access-control-origin on a res obj, as a * as its value = allow cors for all origins
exports.corsWithOptions = cors(corsOptionsDelegate);

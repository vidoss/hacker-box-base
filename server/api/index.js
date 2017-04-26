const api = (module.exports = require("express").Router());

api.get("/*", (req, res, next) => {
  const path = req.params[0];
  return res.send(require("./faker/" + path));
});

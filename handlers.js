const { routes } = require("./routes");
const errorHandler = () => {};

const requestHandler = (req, res) => {
  console.log("in requestHandler");
  const { url, method } = req;
  const chunks = [];
  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", () => {
    let reqBody = Buffer.concat(chunks).toString();
    try {
      reqBody = JSON.parse(reqBody);
    } catch (err) {
      console.error(err);
      reqBody = {};
    } finally {
      reqBody.url = url;
      reqBody.method = method;
    }
    let route = routes[method + url] || routes["GET/404"];

    res.writeHead(route.statuscode, route.headers);
    res.write(route.render(reqBody));
    res.end();
  });
};
module.exports = {
  requestHandler,
};

const routes = {
  "GET/": {
    statuscode: 200,
    headers: {
      "content-type": "text/html",
    },
    render() {
      return "<h1>Home</h1>";
    },
  },
  "GET/about": {
    statuscode: 200,
    headers: {
      "content-type": "application/json",
    },
    render() {
      return JSON.stringify({ name: "Connie", city: "Aliceville, AL" });
    },
  },
  "POST/echo": {
    statuscode: 200,
    headers: {
      "content-type": "application/json",
    },
    render(body) {
      return JSON.stringify(body);
    },
  },
  "GET/404": {
    statuscode: 404,
    headers: {
      "content-type": "text/html",
    },
    render() {
      return "<h1>404 Page Not Found </h1><a href='/'>Home</a>";
    },
  },
};

module.exports = {
  routes,
};

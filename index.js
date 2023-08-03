const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async function(req, res) {
  switch(req.url) {
    case "/about":
      const about = await fs.readFile("about.html", "utf8");
      res.end(about);
      break;
    case "/contact-me":
      const contactMe = await fs.readFile("contact-me.html", "utf8");
      res.end(contactMe);
      break;
    case "/":
    case "/index":
      const index = await fs.readFile("index.html", "utf8");
      res.end(index);
      break;
    default:
      const notFound = await fs.readFile("404.html", "utf8");
      res.end(notFound);
      break;
  }
});

server.listen(3000, function() {
  console.log("Listenning to http://localhost:3000");
});
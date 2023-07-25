const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.end(
      '<h1>Home Page</h1> <a href="https://www.w3schools.com">Visit W3Schools</a>'
    );
  }
  if (req.url === "/users") {
      const users = [
      {
        name: "John Doe",
        email: "John@doe.com",
      },
      {
        name: "Dane Doe",
        email: "Dane@doe.com",
      },
    ];
    res.writeHead(200, 'OK', {"Content-Type": "application/json"})
    res.end(JSON.stringify(users))
  }
});

server.listen(port, () => console.log(`Listening at port ${port}`));

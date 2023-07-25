const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  console.log(`Request Type:${req.method}`);
  console.log(`Date:${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});


  res.render("index", {users});
});
app.get("/home", (req, res) => {
  res.status(200).send("Hello World");
});


app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    returnStatusCodeError();
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    returnStatusCodeError();
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    returnStatusCodeError();
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    returnStatusCodeError();
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await UserModel.findByIdAndDelete(id);

    if (deleteUser == null) {
      res.status(404).json("Usuário não encontrado");
    } else {
      res.status(200).json(deleteUser);
    }
  } catch (error) {
    returnStatusCodeError();
  }
});

const port = 8080;

app.listen(port, () => console.log(`Listening to Express port ${port}!`));

function returnStatusCodeError() {
  returnres.status(500).send(error.message);
}

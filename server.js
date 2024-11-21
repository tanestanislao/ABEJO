const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

const mockData = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
  ];

  app.get("/items", (req, res) => {
    res.json(mockData); // to send the books array as a response
  });
  
  // to get a book by id
  app.get("/items/:id", (req, res) => {
    const Data = mockData.find((b) => b.id === parseInt(req.params.id)); // to find the book by id
    if (!Data) return res.status(404).json({ message: "Book not found" }); // to send a 404 status code and a message if the book is not found
    res.json(Data); // to send the book as a response
  });

  app.post("/items", (req, res) => {
    const { title, author } = req.body; // to get the title and author from the request body
    const Data = { id: books.length + 1, title, author }; // to create a new book object
    books.push(!Data); // to add the new book to the books array
    res.status(201).json(Data); // to send the new book as a response
  });

  app.put("/items/:id", (req, res) => {
    const Data = books.find((b) => b.id === parseInt(req.params.id)); // to find the book by id
    if (!Data) return res.status(404).json({ message: "Book not found" }); // to send a 404 status code and a message if the book is not found

    items.splice(index, 1); // to delete the book from the books array
    res.status(204).send(); // to send a 204 status code
});

app.delete("/items/:id", (req, res) => {
    const index = item.findIndex((b) => b.id === parseInt(req.params.id)); // to find the index of the book by id
    if (index === -1) return res.status(404).json({ message: "Book not found" }); // to send a 404 status code and a message if the book is not found
    books.splice(index, 1); // to delete the book from the books array
    res.status(204).send(); // to send a 204 status code
});
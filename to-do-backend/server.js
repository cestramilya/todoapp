const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const {
    getTodos, createTodo, updateTodo, deleteTodo,
} = require('./controllers/todoController.js')

// App config
const app = express();

const port = process.env.PORT || 8000

const connectionURL = process.env.MONGO_URI 

// Middlewares
// conver to json
app.use(express.json())

app.use(Cors())

//DB config
mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, () => console.log(`running on port: ${port}`));
})
.catch((err) => {
    console.log(err);
})

//API Endpoints

//Get todos list

app.get('/todos', getTodos)

//Create a ned todo

app.post('/todos', createTodo)

//Update a todo

app.put('/todos/:id', updateTodo)

//Delete a todo

app.delete('/todos/:id', deleteTodo)

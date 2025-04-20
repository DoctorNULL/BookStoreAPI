import express, { Application } from 'express';
import { bookRouter } from './routes/book';

const app : Application = express(); // Create an Express application
const port : number = 1234; // Define the port number
const host : string = 'localhost'; // Define the host name

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.get('/', (req, res) => { // Define a route for the root URL
  res.send('Welocme to The Book Management API'); // Send a response to the client
});

app.use("/book", bookRouter); // Use the book router for the /books route

app.listen(port, host, () => { // Start the server and listen on the specified port
  console.log(`Server is running at http://localhost:${port}`); // Log a message to the console
});

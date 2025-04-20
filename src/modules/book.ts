import { Request, Response } from "express";
import { Book } from "../types/book"; // Import the Book model

let books : Book[] = []; // Initialize an empty array of books

export function getBooks(req: Request, res: Response) {
    res.status(200).json(books); // Send the list of books as a JSON response
}

export function getBook(req: Request, res: Response) {
    const bookId = req.params.id; // Get the book ID from the request parameters
    const book = books.find((b) => b.id === parseInt(bookId)); // Find the book with the specified ID

    if (book) {
        res.status(200).json(book); // Send the book as a JSON response
    } else {
        res.status(404).json({ message: "Book not found" }); // Send a 404 error if the book is not found
    }
}

export function createBook(req: Request, res: Response) {
    
    const id = req.body.id; // Get the book ID from the request body
    const title = req.body.title; // Get the book title from the request body   
    const author = req.body.author; // Get the book author from the request body

    if (id !== undefined && title !== undefined && author !== undefined) {
        const newBook: Book = { 
            id:id,
            title:title,
            author:author 
        }; // Create a new book object
        
        books.push(newBook); // Add the new book to the array of books
        
        res.status(201).json("Create Successfully"); // Send the new book as a JSON response with a 201 status code
    }
}

export function updateBook(req: Request, res: Response) {
    
    const id = req.params.id; // Get the book ID from the request parameters
    const title = req.body.title; // Get the book title from the request body   
    const author = req.body.author; // Get the book author from the request body

    if (id !== undefined && title !== undefined && author !== undefined) {
        const bookIndex = books.findIndex((b) => b.id === parseInt(id)); // Find the index of the book with the specified ID

        if (bookIndex !== -1) {
            books[bookIndex] = { id:parseInt(id),
                title: title, 
                author: author
            }; // Update the book in the array
            res.status(200).json("Book Updated"); // Send the updated book as a JSON response
        } else {
            res.status(404).json({ message: "Book not found" }); // Send a 404 error if the book is not found
        }
    }
}

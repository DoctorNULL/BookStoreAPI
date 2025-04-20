import { Request, Response, NextFunction } from "express";

export function validateBookRequest(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id; // Get the book ID from the request parameters

    if (id === undefined) { // Check if the ID is undefined
        id = req.body.id; // If it is, get the ID from the request body
    }
    
    const { title, author } = req.body; // Destructure the request body to get the book properties

    if (id === undefined || !title || !author) { // Check if any of the required properties are missing
        res.status(400).json({ message: "All fields are required" }); // Send a 400 error response if any field is missing
    }
    else
    {
        next(); // Call the next middleware function if validation passes
    }
}
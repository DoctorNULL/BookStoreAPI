import { Router } from "express";
import { createBook, getBook, getBooks, updateBook } from "../modules/book";
import { validateBookRequest } from "../middlewares/book";

export const bookRouter = Router(); // Create a new router instance

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.post("/", validateBookRequest, createBook);
bookRouter.put("/:id", validateBookRequest, updateBook); // Use the same function for both POST and PUT requests
import { body } from "express-validator";

export const productValidation = [
    body('title', 'Enter the title').isLength({ min: 3}).isString(),
    body('cost', 'Enter the cost').isLength({ min: 1}).isString(),
    body('category', 'Enter the tag'),
    body('description', 'Write the decription').isLength({ min: 5}).isString(),
    body('imageUrl', 'Wrong link on the image').optional().isString(), 
];

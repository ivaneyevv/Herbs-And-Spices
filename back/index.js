import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { signUpValidation } from './validations/signup.js';
import { productValidation } from './validations/product.js';

import { signUp, logIn } from './controllers/userController.js';
import { create } from './controllers/productController.js';


mongoose
    .connect('mongodb+srv://admin:YDpoOF31VSiP3vgq@cluster0.mzhyhr9.mongodb.net/shop')
    .then(() => console.log("Database is ok"))
    .catch((err) => console.log("Database is not ok", err));


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080

app.post('/signup', signUp)
app.post('/login', signUpValidation, logIn)
//app.get('/account', checkLogIn, account)



app.get('/product', getProduct)
//app.get('/product/:id', productController.getProduct)
app.post('/product', productValidation, create);
//app.delete('/product/:id', checkLogIn, productController.remove);
//app.patch('/product/:id', checkLogIn, productValidation, productController.update);

app.listen(PORT, (err) => {
    if(err) {
        return console.log(err);
    }

    console.log("server is ok");
});
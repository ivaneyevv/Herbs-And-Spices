import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';

import UserModel from '../models/user.js'

export const signUp = async (req, res) => {
    const result = await UserModel.findOne({ email: req.body.email });

    if (result) {
        return res.send({
            message: 'This email is exist!', alert: false
        });
    }

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }


        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            nickName: req.body.nickName,
            passwordHash: hash,
        });



        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        },'tokenHash',
        {
            expiresIn: '180d',
        },
        )

        const { passwordHash, ...userData} = user._doc;

        res.send({
            message: "successfuly signed up!",
            alert: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Sign Up!",
        });
    }
};

export const logIn = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.send({
                message: 'User not found!', alert: false, data : userData
            });
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!isValidPassword){
            return res.send(
                {
                    message: 'Wrong password!', alert: false, data : userData 
                }
            )
        }

        const token = jwt.sign({
            _id: user._id,
        },'tokenHash',
        {
            expiresIn: '180d',
        },
        )

        const { passwordHash, ...userData} = user._doc;
        
        res.send({
            message: "successfuly loged in!",
            alert: true,
            data: userData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Log In"
        })
    }
}

export const account = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json(
                {
                    message: 'User Not Found!'
                }
            )
        }

        const { passwordHash, ...userData} = user._doc;

        res.json(userData);
    } catch (error) {
        res.status(403).json(
            {
                message: 'No Access',
            }
        )
    }
}
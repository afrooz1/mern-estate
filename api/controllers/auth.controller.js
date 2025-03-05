import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res,next) => {
    try {
        console.log("Received request body:", req.body); // Debugging

        const { username, email, password } = req.body;
        const hashPassword = bcryptjs.hashSync(password,10)

        // Check if request body contains required fields
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new User({ username, email, password:hashPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup error:", error);
        next(error)
    }
};

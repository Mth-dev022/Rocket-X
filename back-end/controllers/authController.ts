import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config();

 interface IUser {
  username: string;
  email: string;
  password: string;
  id?: number;
}
interface IUser_Data {
  id: any,
  username: string,
  email: string;
}

const uri: string | any = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const register = async (req: any, res: any) => {
  try {
    await client.connect();
    const database = client.db('Quizz_app');
    const users = database.collection('users');

    const existingUser = await users.findOne({ 
      $or: [
        { username: req.body.username },
        { email: req.body.email }
      ]
    });

    if (existingUser) {
      return res.status(409).json('User already exists');
    }

    const salt: string = bcrypt.genSaltSync(10);
    const hash: string = bcrypt.hashSync(req.body.password, salt);

    const newUser: IUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash
    };
    await users.insertOne(newUser);

    return res.status(200).json("User has been created");
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json(error);
  } finally {
    await client.close();
  }
};

export const login = async (req: any, res: any) => {
  try {
    await client.connect();
    const database = client.db('Quizz_app');
    const users = database.collection('users');

    const user = await users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("Usuário ou senha incorretos");
    }

    const isPasswordCorrect: any = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json("Usuário ou senha incorretos");
    }
    const jwtKey = process.env.JWT_KEY;
    if (!jwtKey) {
      return res.status(500).json("JWT_KEY não definido nas variáveis de ambiente");
    }

    const token: any = jwt.sign({ id: user._id }, jwtKey);
    const userData: IUser_Data = { id: user._id, username: user.username, email: user.email };

    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 900000,
    }).status(200).json(userData);
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json(error);
  } finally {
    await client.close();
  }
};

export const logout = async (req: any, res: any) => {
  try {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true
    }).status(200).json("User has been logged out.");
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json(error);
  }
};

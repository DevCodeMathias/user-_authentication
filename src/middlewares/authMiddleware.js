//autenticação do JWT 
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const secret = process.env.SECRET;
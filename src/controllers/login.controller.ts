import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function Login(req: Request, res: Response) {
  const { username, password } = req.body;
  const login = { username, password };
  const response = await loginService.Login(login);
  return res.status(response.status).json(response.data);
}

export default Login;
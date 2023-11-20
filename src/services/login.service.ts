import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';
import { Token } from '../types/Token';
import { ServiceResponse } from '../types/ServiceResponse';
import { LoginType } from '../types/Login';

async function Login(login: LoginType): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }

  const findUser = await UserModel.findOne({ where: { username: login.username } });

  if (!findUser || !bcrypt.compareSync(login.password, findUser.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { username, password } = findUser.dataValues;
  const token = jwtUtil.sign({ username, password });
  return { status: 200, data: { token } };
}

export default { Login };
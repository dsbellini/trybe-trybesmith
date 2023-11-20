
const validPassword = 'password';
const noUsernameLoginBody = { username: '', password: validPassword };
const validUsername = 'Hagnar';
const noPasswordLoginBody = { username: validUsername, password: '' };
const notExistingUserBody = { username: 'notfound@email.com', password: validPassword };

const existingUserWithWrongPasswordBody = { email: validUsername, password: 'wrong_password' };

const hashedPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';
const existingUser = { 
  id: 1, 
  email: validUsername,
  password: hashedPassword,
  name: 'user1'
};


const validLoginBody = { email: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody
};
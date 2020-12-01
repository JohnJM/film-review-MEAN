export class User {
  _id: string;
  email: string;
  password: string;
  role: string;
  
  constructor(email, password, role) {
    this.email = email;
    this.password = password;
    this.role = role
  }
}

import { User } from './../interfaces/user.interface';
export class UserLogged implements User {

  id:       string;
  email:    string;
  username: string;
  isactive: boolean;
  roles:    string[];

  constructor( id: string, email: string, username: string, isactive: boolean, roles: string[]) {

    this.id       = id
    this.email    = email
    this.username = username
    this.isactive = isactive
    this.roles    = roles

  }

  static create( user: User): UserLogged {
    return new UserLogged( user.id, user.email, user.username, user.isactive, user.roles)
  }

}
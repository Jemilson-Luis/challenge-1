import DatabaseUsertypes from "../types/databaseUser.types";

export class Users {
  id:string;
  name:string
  email:string
  password:string

  constructor( { email, id, name, password }:DatabaseUsertypes ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

}



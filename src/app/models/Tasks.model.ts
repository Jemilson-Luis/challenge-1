import { TaskModelTypes } from "../types/tasksModel.types";

export class Tasks {
  id:string
  title:string
  desc:string
  date:string
  idUser:string

  constructor( { id, date, desc, idUser, title  }:TaskModelTypes ) {
    this.id = id
    this.date = date
    this.title = title
    this.desc = desc
    this.idUser = idUser
  }

}


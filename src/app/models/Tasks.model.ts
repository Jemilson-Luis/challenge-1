import { TaskModelTypes } from "../types/tasksModel.types";

export class Tasks {
  id:number
  title:string
  desc:string
  date:string
  idUser:number

  constructor( { id, date, desc, idUser, title  }:TaskModelTypes ) {
    this.id = id
    this.date = date
    this.title = title
    this.desc = desc
    this.idUser = idUser
  }

}


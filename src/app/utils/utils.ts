
export class Utils {
  splitName(name:string){
    return name.split(' ')[0].charAt(0).toUpperCase() + name.split(' ')[1].charAt(0).toUpperCase()
  }
}

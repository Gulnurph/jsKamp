//servisler klasöründeki userService si kullanıcam, .. bulunduğun klasörün bir üstüne git
import User from "../models/user.js"
import { UserService } from "../services/userService.js"

console.log("User component yüklendi")

let userService=new UserService()
let user1=new User(1,"Gülnur","Pehlivan","Giresun")
let user2=new User(1,"Engin","Demiroğ","Ankara")


userService.add(user1)
userService.add(user2)
console.log(userService.list())



userService.getById(1)
userService.list()

let customer={id:1, firstName:"Gülnur"}
//prototyping(sonradan bir değer ekleye biliriz)
customer.lastName="Pehlivan"
console.log(customer.lastName)



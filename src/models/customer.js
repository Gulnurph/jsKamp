import User from "./user"

export default class Customer extends User{//user ı genişletir 
    constructor(id,firstName,lastName,city)
    {
   super(id,firstName,lastName,city,this.age)
        this.creditCardNumber=this.creditCardNumber

}
}
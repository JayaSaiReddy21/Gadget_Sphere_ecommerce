export class User{
    firstName :String;
    lastName :String;
    emailId :String;
    password: String;
    mobileNo: Number;

    constructor(firstName :String,
        lastName :String,
        emailId :String,
        password: String,
        mobileNo:Number)

        {
            this.firstName=firstName;
            this.lastName=lastName;
            this.emailId=emailId;
            this.password=password;
            this.mobileNo=mobileNo;
        }


}
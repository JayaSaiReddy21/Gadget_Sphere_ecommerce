export class ProfileDetails{
    userId:number;
    firstName: String;
    lastName: string;
    emailId : string;
    phoneNumber:Number;
    country:String ;
    pincode:Number;
    flat:String ;
	landmark :String ;
	state :String ;
    password :string;

    constructor(
        userId:number,
        firstName: String,
        lastName: string,
        emailId : string,
        phoneNumber:Number,
        country:String,
        pincode:Number,
        flat:String,
        landmark:String,
        state:String,
        password :string)

        {
            this.userId=userId;
            this.firstName=firstName;
            this.lastName=lastName;
            this.emailId=emailId;
            this.phoneNumber=phoneNumber;
            this.country=country;
            this.pincode=pincode;
            this.flat=flat,
            this.landmark=landmark;
            this.state=state;
            this.password=password;
        }


}
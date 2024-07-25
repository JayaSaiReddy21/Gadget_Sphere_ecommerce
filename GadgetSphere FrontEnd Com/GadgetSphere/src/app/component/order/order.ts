export class OrderData{
    orderId:Number;
    userId: Number;
    productId:Number;
    orderQuantity:Number;
    fullName: String;
    phoneNumber:Number;
    country:String ;
    pincode:Number;
    flat:String ;
	landmark :String ;
	state :String ;
    paymentMethod: String;
    orderStatus : String;
    productName: string;
    productPrice: number;

    constructor(
    orderId:Number,
    userId: Number,
    productId:Number,
    orderQuantity:Number,
    fullName:String,
    phoneNumber:Number,
    country:String,
    pincode:Number,
    flat:String,
    landmark:String,
    state:String,
    paymentMethod: String,
    orderStatus : String,
    productName: string,
    productPrice: number
    

    )
    {
        this.orderId=orderId;
        this.userId=userId;
        this.productId=productId;
        this.orderQuantity=orderQuantity
        this.fullName=fullName;
        this.phoneNumber=phoneNumber;
        this.country=country;
        this.pincode=pincode;
        this.flat=flat,
        this.landmark=landmark;
        this.state=state;
        this.paymentMethod=paymentMethod;
        this.orderStatus=orderStatus;
        this.productName=productName;
        this.productPrice=productPrice;

    }
}
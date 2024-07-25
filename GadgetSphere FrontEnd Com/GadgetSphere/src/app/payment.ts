export class Payment{
    paymentId :number;
    userId : number;

	paymentStatus:string;
	paymentMode:String;
	totalAmount:number;
	
	 cardHolderName:string;
	
	cardNumber:number;
	
	 expiryDate:Date;
	
	 cardCvv:number;

     constructor( paymentId :number,
        userId : number,
      
        paymentStatus:string,
        
        
         paymentMode:string,
        
         totalAmount:number,
        
         cardHolderName:string,
        
        cardNumber:number,
        
         expiryDate:Date,
        
         cardCvv:number
         ){

            this.paymentId=paymentId;
            this.userId=userId;
           
            this.paymentStatus=paymentStatus;
            this.paymentMode=paymentMode;
            this.totalAmount=totalAmount;
            this.cardHolderName=cardHolderName;
            this.cardNumber=cardNumber;
            this.expiryDate=expiryDate;
            this.cardCvv=cardCvv;


     }
}
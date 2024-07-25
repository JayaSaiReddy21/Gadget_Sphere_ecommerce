import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardPaymentDialogComponent } from './component/card-payment-dialog/card-payment-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //  constructor(public dialog: MatDialog) {}

  //  openCardPaymentDialog(): void {
  //   const dialogRef = this.dialog.open(CardPaymentDialogComponent, {
  //     width: '400px' // Set the width of the dialog as needed
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }





  title = 'Gadget Sphere';
}

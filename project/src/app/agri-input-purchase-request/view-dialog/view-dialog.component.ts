import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog',
  template: '<ng-container></ng-container>'
})
export class ViewDialog implements OnInit {
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }
  openDialog(orderDetails) {
    this.dialog.open(ViewDialogComponent, {
      data: {
        orderDetails
      },
      width:'500px'
    });
  }
}

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  doCloseDialog(){
    this.dialogRef.close()
  }
}

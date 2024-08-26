import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbar : MatSnackBar
  ) { }


  showSnackbar(msg:string){
    this._snackbar.open(msg,"close",{
      verticalPosition :"top",
      horizontalPosition: "left",
      duration : 4000
    })
  }
}
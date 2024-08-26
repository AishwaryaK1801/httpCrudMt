import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _loaderService = inject(LoaderService)
  isLoading : boolean =false
  title = 'httpCrudMt';


   ngOnInit(): void {
     this._loaderService.loaderStatus$
     .subscribe(res=>{
      this.isLoading=res
     })
   }
}

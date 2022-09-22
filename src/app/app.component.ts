import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TiendaOnline';

  showMessage: boolean = true;

  onClickShowMessage(){
    console.log("showMessage: ",this.showMessage)
    this.showMessage = !this.showMessage;
  }

}

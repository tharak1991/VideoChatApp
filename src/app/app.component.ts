import { Component , Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isHome = false ;
  isVideoChat = false ;

  @Output() assignRoom: EventEmitter<string> = new EventEmitter();

  constructor() {
   this.isHome = true ;
   this.isVideoChat = false ;
  }

  private goToChat = (Event) => {
    this.isHome = false ;
    this.isVideoChat = true ;
    this.assignRoom.emit(Event.target.value) ;

  }
}

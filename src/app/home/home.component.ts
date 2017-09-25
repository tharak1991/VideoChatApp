import { Component, OnInit , Output , EventEmitter  } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedRoom;

  rooms = [
    {id: 1, name: 'Room 1'},
    {id: 2, name: 'Room 2'},
    {id: 3, name: 'Room 3'},
    {id: 4, name: 'Room 4'}
  ];

  @Output() toggle: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {

  }

  ngOnInit() {
  this.selectedRoom = 'Room 1';
  }


  private onJoin = (event) => {

    this.toggle.emit(this.selectedRoom);
  }
}

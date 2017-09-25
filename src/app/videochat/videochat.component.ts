import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.css']
})

export class VideochatComponent implements OnInit {
  isVideoChat = false ;
  apiKey = ' 45604412';
  sessionId = '123';
  token = 'b2a20a033f42ba9f53727719c146ee049c11a2d6';
  roomNumber  ;
  tokboxUrl = 'https://tokbox.com/embed/embed/ot-embed.js?' +
  'embedId=469335ba-1988-488e-903f-d92526a746f8&room=' +
  this.roomNumber +
  '&iframe=true';


  private changeRoom = (Event) => {
    this.roomNumber = Event.target.Value;
  }


  constructor() {
    this.isVideoChat = true ;
   }

  ngOnInit() {
    this.roomNumber = 'Room 1' ;
    this.tokboxUrl = 'https://tokbox.com/embed/embed/ot-embed.js?' +
    'embedId=469335ba-1988-488e-903f-d92526a746f8&room=' +
    this.roomNumber +
    '&iframe=true';
  }


// Handling all of our errors here by alerting them
 private handleError = (error) => {
  if (error) {
    alert(error.message);
  }
}

}


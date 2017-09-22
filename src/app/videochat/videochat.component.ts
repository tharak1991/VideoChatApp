import { Component, OnInit } from '@angular/core';
// import * as OT from '@opentok/client';
// const opentalk = require('@opentok/client');



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
  // OT = new opentalk('apiKey', 'apiSecret');

  constructor() {
    this.isVideoChat = true ;
    this.initializeSession();
   }

  ngOnInit() {
  }


// Handling all of our errors here by alerting them
 private handleError = (error) => {
  if (error) {
    alert(error.message);
  }
}

 private initializeSession = () => {
    // const session = OT.initSession('45604412', this.sessionId);
    // Subscribe to a newly created stream
    // Create a publisher
    // const publisher = OT.initPublisher();

    // const publisher = OT.initPublisher('publisher', {
    //   insertMode: 'append',
    //   width: '100%',
    //   height: '100%'
    // }, this. handleError);
}

}


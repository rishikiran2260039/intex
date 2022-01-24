import { Component, OnInit } from '@angular/core';
import * as gifshot from 'gifshot';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  private base64Gif: string;

  private images: string[] = [
    "https://upload.wikimedia.org/wikipedia/en/1/1d/Page_Under_Construction.png"
  ];

  ngOnInit() {
    gifshot.createGIF({ 'images': this.images, 'interval': .8 }, (obj) => {
      if (obj.error) return;
      this.base64Gif = obj.image;
    });
  }

}

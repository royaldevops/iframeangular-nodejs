import { Component } from '@angular/core';
import { IframeimageService } from './iframeimage.service'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public imgurl
  constructor(private iframeimgservice: IframeimageService, private santizer: DomSanitizer) {
    iframeimgservice.getImageUrl().subscribe(res => {
      this.imgurl = santizer.bypassSecurityTrustResourceUrl(res['data']['imgurl'])

    })
  }
}

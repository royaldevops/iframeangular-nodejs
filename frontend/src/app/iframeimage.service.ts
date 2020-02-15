import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IframeimageService {

  constructor(private http: HttpClient) {

  }
  getImageUrl() {
    return this.http.get('http://localhost:3000/getimages/1')
  }
}

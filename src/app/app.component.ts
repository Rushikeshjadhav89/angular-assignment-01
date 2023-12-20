import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_01';
  Name: string = "MEAN stack"
  src: string = "https://images.alphacoders.com/889/thumb-1920-889210.png"
  changeImage() {
    if (this.Name == "MEAN stack") {
      this.Name="MERN stack"
      this.src="https://i.pinimg.com/736x/4c/44/39/4c443992f6106654fc270b3ca708d29e.jpg"

    }
    else if(this.Name == "MERN stack"){
      this.Name="MEAN stack"
      this.src="https://images.alphacoders.com/889/thumb-1920-889210.png"
    }
  }
}

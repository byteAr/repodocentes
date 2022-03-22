import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isTab1Active:boolean = false;
  isTab2Active:boolean = false;
  isTab3Active:boolean = false;
  isTab4Active:boolean = false;
  isTab5Active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ejecutarTab(key:number) {
    
    switch (key) {
      case 1:
        this.isTab1Active = !this.isTab1Active;
        this.isTab2Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 2:
        this.isTab2Active = !this.isTab2Active;
        this.isTab1Active = false;
        this.isTab3Active = false;
        this.isTab4Active = false;
        this.isTab5Active = false;
        break;
      case 3:
          this.isTab3Active = !this.isTab3Active;
          this.isTab2Active = false;
          this.isTab1Active = false;
          this.isTab4Active = false;
          this.isTab5Active = false;
          break;
      case 4:
          this.isTab4Active = !this.isTab4Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab1Active = false;
          this.isTab5Active = false;
          break;
      case 5:
          this.isTab5Active = !this.isTab5Active;
          this.isTab2Active = false;
          this.isTab3Active = false;
          this.isTab4Active = false;
          this.isTab1Active = false;
        break;
    
      default:
        break;
    }
  }

}

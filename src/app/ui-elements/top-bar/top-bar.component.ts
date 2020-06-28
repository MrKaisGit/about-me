import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menus: Array<String> = ["About me", "Resume", "Blog", "Contact"];
  activeItem: String = this.menus[0];

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(item: String) {
    this.activeItem = item;
  }
}

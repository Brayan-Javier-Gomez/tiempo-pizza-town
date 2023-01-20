import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "menu-mobile",
  templateUrl: "./menu-mobile.component.html",
  styleUrls: ["./menu-mobile.component.scss"],
})
export class MenuMobileComponent implements OnInit {
  isOpen = false;
  @Output() handleCloseMenu = new EventEmitter<boolean>();
  @Input() set handleOpenMenu(openMenu: boolean) {
    this.isOpen = openMenu;
    if (openMenu) {
      document.body.classList.add("modal__open");
    } else {
      document.body.classList.remove("modal__open");
    }
  }
  @Input() itemsMenu: { name: string; image: string; url: string }[];

  constructor() {}

  ngOnInit(): void {}

  closeMenu(): void {
    this.handleCloseMenu.emit(false);
  }
}

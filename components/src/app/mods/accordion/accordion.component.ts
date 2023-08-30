import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
  @Input() items = [];
  openItemIndex = 0;

  onclick(index: number) {
    if (index === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = index;
    }
  }
}

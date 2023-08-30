import { Component } from "@angular/core";

@Component({
  selector: "app-mode-home",
  templateUrl: "./mode-home.component.html",
  styleUrls: ["./mode-home.component.css"],
})
export class ModeHomeComponent {
  modalOpen = false;
  items = [
    {title : 'why is the sky blue?' , content: 'The sky is blue because it is' },
    {title : 'what does an orange taste like?' , content : 'An orange tastes like an orange'},
    {title : 'what color is that cat' , content :'The Cat is an orange color' }
    
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}

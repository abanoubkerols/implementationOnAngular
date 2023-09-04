import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "wSearch";
  pages=[]

  constructor(private wikipediaServ: WikipediaService) {}
  onTerm(term: string) {
    this.wikipediaServ.search(term).subscribe((res: any)=>{
      this.pages = res.query.search
      
    })
  }
}

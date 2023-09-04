import { CommonModule } from "@angular/common";
import { CustomerComponent } from "./customer.component";
import { NgModule } from "@angular/core";
import { CustomerRoutingModule } from "./customer.routes";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [

      CustomerComponent
    ],
    imports: [
        TranslateModule,
        CustomerRoutingModule,
        
      CommonModule

    ],
    providers: [],

  })

  export class CustomerModule { }

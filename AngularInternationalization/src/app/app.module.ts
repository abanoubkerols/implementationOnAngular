import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule} from '@ngx-translate/core';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(
      
    
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

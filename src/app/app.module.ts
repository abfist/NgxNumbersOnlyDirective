import { NgxNumbersOnlyDirectiveModule } from './../../projects/ngx-numbers-only-directive/src/lib/ngx-numbers-only-directive.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNumbersOnlyDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

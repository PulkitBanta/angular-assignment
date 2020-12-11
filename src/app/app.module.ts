import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { Ques1Component } from './questions/ques1/ques1.component';
import { Ques2Component } from './questions/ques2/ques2.component';
import { Ques3Component } from './questions/ques3/ques3.component';
import { Ques4Component } from './questions/ques4/ques4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    Ques1Component,
    Ques2Component,
    Ques3Component,
    Ques4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

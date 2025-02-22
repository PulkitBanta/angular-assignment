import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { Ques1Component } from './questions/ques1/ques1.component';
import { Ques2Component } from './questions/ques2/ques2.component';
import { Ques3Component } from './questions/ques3/ques3.component';
import { Ques4Component } from './questions/ques4/ques4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './questions/ques4/label/label.component';
import { DataInputComponent } from './questions/ques4/data-input/data-input.component';
import { PanelComponent } from './questions/ques2/panel/panel.component';
import { InputComponent } from './questions/ques2/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    Ques1Component,
    Ques2Component,
    Ques3Component,
    Ques4Component,
    LabelComponent,
    DataInputComponent,
    PanelComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

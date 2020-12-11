import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ques1Component } from './questions/ques1/ques1.component';
import { Ques2Component } from './questions/ques2/ques2.component';
import { Ques3Component } from './questions/ques3/ques3.component';
import { Ques4Component } from './questions/ques4/ques4.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'ques1', component: Ques1Component },
  { path: 'ques2', component: Ques2Component },
  { path: 'ques3', component: Ques3Component },
  { path: 'ques4', component: Ques4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

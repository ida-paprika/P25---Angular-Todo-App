import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './pages/todo-view/todo-view.component';

const routes: Routes = [
  { path: 'all', component: TodoViewComponent },
  { path: 'active', component: TodoViewComponent },
  { path: 'completed', component: TodoViewComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

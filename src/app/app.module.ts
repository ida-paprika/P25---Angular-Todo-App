import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CheckListComponent } from './components/check-list/check-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoViewComponent } from './pages/todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemComponent,
    CheckListComponent,
    TodoViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    ShowFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

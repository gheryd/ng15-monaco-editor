import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestEditorModule } from './editor/test-editor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

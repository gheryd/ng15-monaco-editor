import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 10px; margin: 10px; border: 1px solid green">
      <div>Test editor</div>
      <test-editor></test-editor>
    </div>
  `,
})
export class AppComponent {
  title = 'ng15-monaco-editor';
}

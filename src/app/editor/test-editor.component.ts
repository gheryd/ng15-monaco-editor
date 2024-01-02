import { Component } from "@angular/core";

@Component({
    selector:"test-editor",
    template: `
        <ngx-monaco-editor [options]="editorOptions" [(ngModel)]="code"></ngx-monaco-editor>
    `
})
export class TestEditorComponent {
    editorOptions = {theme: 'testLangTheme', language: 'testLang'};
    code: string= '';
}
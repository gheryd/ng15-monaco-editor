import { NgModule } from "@angular/core";
import { TestEditorComponent } from "./test-editor.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MonacoEditorModule, NgxMonacoEditorConfig } from "ngx-monaco-editor";
import { testLangDef } from "./lang-def";
import * as _M from "monaco-editor"
import { testLangTheme } from "./lang-theme";
import { TestLangCompletationRegister } from "./lang-providers";

const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
    onMonacoLoad: () => { 
        const monaco = (window as any).monaco;
        monaco.languages.register({ id: "testLang" });
        monaco.languages.setMonarchTokensProvider("testLang", testLangDef);
        monaco.editor.defineTheme("testLangTheme", testLangTheme);
        monaco.languages.registerCompletionItemProvider("testLang", TestLangCompletationRegister(monaco));
    } 
};

@NgModule({
    declarations: [
        TestEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MonacoEditorModule.forRoot(monacoConfig)
    ],
    exports: [
        TestEditorComponent
    ]
})
export class TestEditorModule {

}
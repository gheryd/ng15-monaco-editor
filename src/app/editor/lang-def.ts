import * as _M from "monaco-editor"

export const testLangDef: _M.languages.IMonarchLanguage = {
    functions: ['if', 'abs'],
    objects: ['obj1', 'obj2'],
    symbols:  /[=><!~?:&|+\-*\/\^%]+/,
    tokenizer: {
        root:[
            [
                /[a-z_$][\w$]*/, { 
                    cases: { 
                        '@functions': 'function',
                        '@objects': 'object',
                        '@default': 'identifier' 
                    } 
                }
            ],
        ]
    }

}
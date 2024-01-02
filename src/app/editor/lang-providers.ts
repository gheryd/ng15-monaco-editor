
export function TestLangCompletationRegister(monaco: any){
    return {
        provideCompletionItems:  (model: any, position: any) => {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            };
            var suggestions = [
                {
                    label: "obj1",
                    kind: monaco.languages.CompletionItemKind.Text,
                    insertText: "obj1(\"${1:code}\")",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                    range: range,
                },
                {
                    label: "testing",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "testing(${1:condition})",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                    range: range,
                },
                {
                    label: "if",
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: "if(${1:condition})",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                    documentation: "If function",
                    range: range,
                },
            ];
            return { suggestions: suggestions };
        }
    }
}

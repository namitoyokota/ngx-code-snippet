import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightAuto, HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { CodeSnippetComponent } from './code-snippet.component';

@NgModule({
    declarations: [CodeSnippetComponent],
    imports: [CommonModule, HighlightModule, HighlightAuto, HighlightLineNumbers],
    exports: [CodeSnippetComponent],
    providers: [
        provideHighlightOptions({
            fullLibraryLoader: () => import('highlight.js'),
            lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        }),
    ],
})
export class CodeSnippetModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { CodeSnippetComponent } from './code-snippet.component';

@NgModule({
    declarations: [CodeSnippetComponent],
    imports: [CommonModule, HighlightModule],
    exports: [CodeSnippetComponent],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                fullLibraryLoader: () => import('highlight.js'),
            },
        },
    ],
})
export class CodeSnippetModule {}

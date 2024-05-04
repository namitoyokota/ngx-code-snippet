import { Component } from '@angular/core';
import { CodeSnippets } from 'src/abstractions/code-snippets';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Snippets to display in the usage section */
    readonly snippets = CodeSnippets;
}

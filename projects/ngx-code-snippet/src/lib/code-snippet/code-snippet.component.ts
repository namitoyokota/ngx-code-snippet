import { Component, Input, OnDestroy } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Subscription, asyncScheduler } from 'rxjs';

@Component({
    selector: 'code-snippet',
    templateUrl: './code-snippet.component.html',
    styleUrls: ['./code-snippet.component.scss'],
    animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class CodeSnippetComponent implements OnDestroy {
    /** Code snippet to display */
    @Input() code = '';

    /** Indicates when copy button should be shown */
    @Input() showCopy = true;

    /** Show line numbers */
    @Input() showLineNumbers = false;

    /** Manually set language of the code */
    @Input('language')
    set setLanguage(language: string) {
        this.language = language;
        this.autoHighlight = false;
    }

    /** Manually set language of the code */
    language = '';

    /** Indicates whether to use auto highlighting */
    autoHighlight = true;

    /** Whether copy button has been pressed */
    copiedToClipboard = false;

    /** Handles memory leaks for copied text scheduler */
    private copyTextSub: Subscription;

    /** Length of time in which copied text appears (ms) */
    private readonly copiedTextLength = 2000;

    constructor() {}

    /**
     * On destroy lifecycle hook
     */
    ngOnDestroy(): void {
        this.copyTextSub?.unsubscribe();
    }

    /**
     * Copies code to the clipboard
     */
    copyToClipboard(): void {
        navigator.clipboard.writeText(this.code);
        this.copiedToClipboard = true;
        this.copyTextSub = asyncScheduler.schedule(() => (this.copiedToClipboard = false), this.copiedTextLength);
    }
}

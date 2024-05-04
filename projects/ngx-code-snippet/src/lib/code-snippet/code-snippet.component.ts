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

    /** Format of the code */
    @Input() language = '';

    /** Whether copy button has been pressed */
    copied = false;

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
        this.copied = true;
        this.copyTextSub = asyncScheduler.schedule(() => (this.copied = false), this.copiedTextLength);
    }
}

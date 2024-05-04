import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeSnippetModule } from 'ngx-code-snippet';
import { HighlightModule } from 'ngx-highlightjs';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, CodeSnippetModule, HighlightModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

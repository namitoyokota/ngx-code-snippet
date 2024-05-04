import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodeSnippetModule } from 'ngx-code-snippet';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CodeSnippetModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

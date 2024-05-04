/**
 * Snippets used to display the usage section
 */
export class CodeSnippets {
    /** Code snippet to import module */
    static module = `import { CodeSnippetModule } from 'ngx-code-snippet';
    
@NgModule({
    imports: [CodeSnippetModule],
})
export class AppModule {}`;

    /** Code snippet to set component config input */
    static config = `readonly underline = {
    type: 'underline',
    color: '#F38181',
} as RoughAnnotationConfig;`;

    /** Code snippet to use notation reveal component */
    static html = `<code-snippet [config]="underline">
    This sentence will be underlined.
</code-snippet>`;

    /** Code snippet to use reset flag */
    static reset = `<code-snippet [reset]="false"></code-snippet>`;

    /** Code snippet to override delay */
    static delay = `<code-snippet [delay]="5000"></code-snippet>`;
}

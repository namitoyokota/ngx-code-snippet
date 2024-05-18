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

    /** Code snippet to use notation reveal component */
    static html = `<code-snippet code="<div></div>"></code-snippet>`;
}

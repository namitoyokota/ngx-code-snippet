<h1 align="center"><img height="150" src="https://raw.githubusercontent.com/namitoyokota/ngx-code-snippet/master/src/assets/logo.png" /><br> Code Snippet</h1>

<p align="center">
    <a href="https://github.com/namitoyokota/ngx-code-snippet/blob/master/LICENSE">
        <img alt="GitHub License" src="https://img.shields.io/github/license/namitoyokota/ngx-code-snippet" />
    </a>
    <a href="https://www.npmjs.com/package/ngx-code-snippet">
        <img alt="NPM Version" src="https://img.shields.io/npm/v/ngx-code-snippet.svg" />
    </a>
    <a href="https://www.npmjs.com/package/ngx-code-snippet">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/ngx-code-snippet" />
    </a>
</p>

<p align="center">
    <b>Code Snippet</b> is an Angular component to display syntax highlighting to code snippets.
</p>

## Installation

Install using a package manager:

```shell
npm i ngx-code-snippet
```

or

```shell
yarn add ngx-code-snippet
```

### API

This readonly component takes in the following properties as inputs:

| Name              | Type    | Default | Description                                                                                              |
| ----------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `code`            | string  | ""      | Code to display.                                                                                         |
| `language`        | string  | ""      | Language of the code snippet. Automatic language detection is supported when this field is not provided. |
| `showCopy`        | boolean | true    | Show/hide copy button.                                                                                   |
| `showLineNumbers` | boolean | false   | Show/hide line numbers.                                                                                  |

## License

[MIT](https://github.com/namitoyokota/ngx-code-snippet/blob/master/LICENSE) &copy; [Namito Yokota](https://www.namitoyokota.com)

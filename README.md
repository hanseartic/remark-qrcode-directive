# QR Code remark directive plugin

This remark-plugin allows to embed a QR-code from a given value into markdown files.

## Installation
### npm
```shell
npm i @hanseartic/remark-qrcode-directive
```
### yarn
```shell
yarn add @hanseartic/remark-qrcode-directive
```

### Pre-Conditions
This plugin needs the [`remark-directive`](https://github.com/remarkjs/remark-directive) plugin to generally enable directives.

### Usage
Given a markdown file `example.md`:
```markdown
# Example with QR-Code

::qr[Hi from qr-code-directive]

QR Code says: 'Hi from qr-code-directive'.
```

and a processing module `example.js`:
```javascript
import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
// necessary to enable directives in general
import remarkDirective from 'remark-directive'
// the QR-Code directive itself
import qrCodeDirective from '@hanseartic/remark-qrcode-directive'

main()

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(qrCodeDirective)
    .process(await read('example.md'))

  console.log(String(file))
}
```

Following result could be rendered by `node example`:

```html
# Example with QR-Code

![QR code for 'Hi from qr-code-directive'](data:image/png;base64,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 "Hi from qr-code-directive")

QR Code says: 'Hi from qr-code-directive'.
```

> # Example with QR-Code
>
> ![QR code for 'Hi from qr-code-directive'](data:image/png;base64,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 "Hi from qr-code directive")
>
> QR Code says: 'Hi from qr-code-directive'.

#### Passing options
The underlying qr-code package is [`qrcode`](https://www.npmjs.com/package/qrcode) and all [options](https://github.com/soldair/node-qrcode#options-9) can be passed as directive attributes.

For example to make the background transparent use the following:

```markdown

::qr[your data]{color.light=#00000000}

```

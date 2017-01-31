# Fin-HTML-entities

HTML entities decoder for FIN natural language processor.

## Installation

```
npm i --save fin-html-entities
```

## Usage

```javascript
const fin = require('finnlp');
fin.extend(require('fin-html-entities'));
// now when you instantiate a new input, HTML entities will be decoded
```
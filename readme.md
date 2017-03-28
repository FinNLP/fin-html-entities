# Fin-HTML-entities

HTML entities decoder for FIN natural language processor.

```
&amp; -> &
&quot; -> "
&#x00025; -> %

// and many more
```

## Installation

```
npm i --save fin-html-entities
```

## Usage

Just by importing the modules, the preprocessor will be added.

```typescript
import {Run} from "finnlp";
import "fin-html-entities";
```



# rename-imports


## Usage

```
npx react-router-v4-codemods rename-imports path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods rename-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js rename-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/rename-imports/__testfixtures__/basic.input.js)</small>):
```js
import { Route, Redirect } from 'react-router';

```

**Output** (<small>[basic.output.js](transforms/rename-imports/__testfixtures__/basic.output.js)</small>):
```js
import { Route, Redirect } from 'react-router-dom';

```
<!--FIXTURES_CONTENT_END-->
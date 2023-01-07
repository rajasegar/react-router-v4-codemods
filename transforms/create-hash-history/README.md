# create-hash-history


## Usage

```
npx react-router-v4-codemods create-hash-history path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods create-hash-history path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js create-hash-history path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/create-hash-history/__testfixtures__/basic.input.js)</small>):
```js
import { Router, hashHistory } from 'react-router';

const MyApp = () => (
  <Router history={hashHistory}>
    <Route path="/posts" component={PostList} />
  </Router>
);

```

**Output** (<small>[basic.output.js](transforms/create-hash-history/__testfixtures__/basic.output.js)</small>):
```js
const history = createHashHistory();
import createHashHistory from 'history/createHashHistory';
import { Router, hashHistory } from 'react-router';

const MyApp = () => (
  <Router history={history}>
    <Route path="/posts" component={PostList} />
  </Router>
);

```
<!--FIXTURES_CONTENT_END-->
# wrap-with-switch


## Usage

```
npx react-router-v4-codemods wrap-with-switch path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods wrap-with-switch path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js wrap-with-switch path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/wrap-with-switch/__testfixtures__/basic.input.js)</small>):
```js
import { Router, Route } from 'react-router-dom';

const MyApp = () => (
  <Router history={history}>
    <Route path="/posts" component={PostList} />
    <Route path="/posts/:id" component={PostEdit} />
    <Route path="/posts/:id/show" component={PostShow} />
    <Route path="/posts/:id/delete" component={PostDelete} />
  </Router>
);

```

**Output** (<small>[basic.output.js](transforms/wrap-with-switch/__testfixtures__/basic.output.js)</small>):
```js
import { Router, Route } from 'react-router-dom';

const MyApp = () => (
  <Router history={history}>
    <Switch>
      <Route path="/posts" component={PostList} />
      <Route path="/posts/:id" component={PostEdit} />
      <Route path="/posts/:id/show" component={PostShow} />
      <Route path="/posts/:id/delete" component={PostDelete} />
    </Switch>
  </Router>
);

```
<!--FIXTURES_CONTENT_END-->
# index-route


## Usage

```
npx react-router-v4-codemods index-route path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods index-route path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js index-route path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/index-route/__testfixtures__/basic.input.js)</small>):
```js
const App = () => (
  <div>
    <IndexRoute component={Home} />;
  </div>
);

```

**Output** (<small>[basic.output.js](transforms/index-route/__testfixtures__/basic.output.js)</small>):
```js
const App = () => (
  <div>
    <Route exact path="/" component={Home} />;
  </div>
);

```
<!--FIXTURES_CONTENT_END-->
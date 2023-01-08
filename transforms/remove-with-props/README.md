# remove-with-props


## Usage

```
npx react-router-v4-codemods remove-with-props path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods remove-with-props path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove-with-props path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove-with-props/__testfixtures__/basic.input.js)</small>):
```js
import withProps from 'recompose/withProps';
import Dashboard from './Dashboard';
const MyApp = ({ title }) => {
  const DashboardWithTitle = withProps(Dashboard, { title });
  return (
    <Router history={history}>
      <Route path="/" component={DashboardWithTitle} />
    </Router>
  );
};

```

**Output** (<small>[basic.output.js](transforms/remove-with-props/__testfixtures__/basic.output.js)</small>):
```js
import withProps from 'recompose/withProps';
import Dashboard from './Dashboard';
const MyApp = ({ title }) => {
  return (
    <Router history={history}>
      <Route path="/" render={(props) => {
        return <Dashboard title={title} {...props} />;
      }} />
    </Router>
  );
};

```
<!--FIXTURES_CONTENT_END-->
# react-router-v4-codemods


A collection of codemods for react-router-v4-codemods.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx react-router-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add react-router-v4-codemods
react-router-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [add-exact-prop](transforms/add-exact-prop/README.md)
* [create-hash-history](transforms/create-hash-history/README.md)
* [hash-router](transforms/hash-router/README.md)
* [rename-imports](transforms/rename-imports/README.md)
* [wrap-with-switch](transforms/wrap-with-switch/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
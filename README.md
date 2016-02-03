# A delicious recipe for Front End developers
#### Built with ES6+, Webpack, Babel, PostCss, Karma, Jasmine

A ready to use development workflow with the following capabilities:

- Dependency management: npm (Webpack)
- Code quality checking: eslint-loader
- Code transpiling: babel-loader
- CSS Post-processing: style-loader, css-loader, and postcss-loader along with extract-text-webpack-plugin.
- Code minification: Webpack built in plugin UglifyJsPlugin
- Assets optimization: img-loader along with file-loader and url-loader
- Setup and launch a local webserver: webpack-dev-server
- Watch mode: webpack-dev-server (HMR)
- Run unit tests: karma-webpack and Jasmine


## Getting Started

* Clone the repository:
```bash
git clone https://github.com/dfernandeza/fe-recipe-webpack
cd fe-recipe-webpack
```

* Install all the dependencies:
```bash
npm install
```

* Start the project:
```bash
npm start
```
_Or start the project with development mode on (with source maps enabled)_
```bash
npm run dev
```

* Start hacking


#### Testing 
Running `npm test` will run the unit tests with Karma.


## License
MIT

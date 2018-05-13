# React Starter

Bootstrap your next React application without the heavy/clunky create-react-app CLI!

## Prerequisites

Before getting started, you must install [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) on your system.

## Getting Started

Install Dependencies:
```
  npm install
```

Start Development Server (Includes Hot Reloading!):
```
  npm start
```

Build For Production (Builds in ./dist)
```
  npm run build
```

## FAQ

### What is Webpack?
Webpack is the most popular bundler for web applications. With one command, we can compile our source code into a single minified file. This is great for distribution!

### What's .babelrc used for?
Great question! The **.babelrc** file configures [Babel](https://babeljs.io/). Babel is a Javascript transpiler that converts newer, less-supported Javascript (ES6+) into ES5. Without this, your React application will not be able to run in older browsers.

Take note of the babel-related dependencies included in the **package.json** file.

---
title: Lazy Loading ES2015 modules in the browser
tags: [javascript, lazy-loading, es2015, commonjs, amd, requirejs, webpack, system.js, jspm, design patterns, fedc]
category: talk
---

I gave this talk on June 17th, 2016 at [Front End Design Conference](http://frontenddesignconference.com/).

This talk is about loading code during page load time vs lazy loading, then how to load ES2015 modules both synchronously (during page load) and asynchronously (lazy-load) using System.js over Babel, as well as how to use JSPM to organize this process and resolve dependencies from NPM and GitHub.

#### What will the audience learn

- The fundamentals on when to load your modules (page load time vs lazy loading) for a most optimized page performance
- The 3 main module systems in JavaScript: AMD, CommonJS and ES2015 modules
- The ES2015 Module Loader spec and System.js
- Importing modules synchronously and asynchronously
- JSPM as a dependency management system

#### Slide deck
* [Slide deck link](tiagorg.com/talk-lazy-loading-es2015-modules/)

#### Resources
- [Lazy load EAA pattern](http://martinfowler.com/eaaCatalog/lazyLoad.html)
- [Webpack](https://webpack.github.io)
- [Webpack Code Splitting](https://webpack.github.io/docs/code-splitting.html)
- [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader)
- [Loader](https://whatwg.github.io/loader/)
- [System.js](https://github.com/systemjs/systemjs)
- [JSPM](http://jspm.io)

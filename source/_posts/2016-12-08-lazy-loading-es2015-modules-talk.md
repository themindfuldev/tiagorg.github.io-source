---
title: Lazy Loading ES2015 modules in the browser (talk)
tags: [javascript, lazy-loading, es6, es2015, commonjs, amd, requirejs, webpack, system.js, jspm, design patterns, fedc, devcon5, abstractions]
category: talk
---

I gave this talk on June 17th, 2016 at [Front End Design Conference](http://frontenddesignconference.com/)
 in **St. Petersburgh, FL**, on August 2nd, 2016 at [DevCon5](http://www.html5report.com/conference/newyork/) in **New York, NY**, on August 18th, 2016 at [Abstractions](http://abstractions.io/) in **Pittsburgh, PA**, on September 29th, 2016 at [SF Web Performance Meetup](http://www.meetup.com/SF-Web-Performance-Group/events/233976760/) in **San Francisco, CA**, and on December 8th, 2016 at [Women Who Code Meetup](https://www.meetup.com/Women-Who-Code-SF/events/233503274/) in **San Francisco, CA**.

This talk is about loading code during page load time vs lazy loading, then how to load ES2015 modules both synchronously (during page load) and asynchronously (lazy-load) using System.js over Babel, as well as how to use JSPM and Webpack 2 to bundle your app and resolve dependencies.

#### What will the audience learn

- The fundamentals on when to load your modules (page load time vs lazy loading) for a most optimized page performance
- The 3 main module systems in JavaScript: AMD, CommonJS and ES2015 modules
- The ES2015 Module Loader spec and System.js
- Importing modules synchronously and asynchronously
- JSPM as a dependency management system
- Webpack 2 as a dependency management system

#### Slide deck
* [Slide deck link](http://tiagorg.com/talk-lazy-loading-es2015-modules/)

#### Resources
- [Lazy load EAA pattern](http://martinfowler.com/eaaCatalog/lazyLoad.html)
- [Webpack](https://webpack.github.io)
- [Webpack Code Splitting](https://webpack.github.io/docs/code-splitting.html)
- [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader)
- [Loader](https://whatwg.github.io/loader/)
- [System.js](https://github.com/systemjs/systemjs)
- [JSPM](http://jspm.io)
- [What's new in Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)

#### Sample repos
- [github.com/tiagorg/lazy-load-es2015-systemjs](https://github.com/tiagorg/lazy-load-es2015-systemjs) - Lazy-loading the talk examples in ES2015 bundled through JSPM
- [github.com/tiagorg/lazy-load-es2015-webpack2](https://github.com/tiagorg/lazy-load-es2015-webpack2) - Lazy-loading the talk examples in ES2015 bundled through Webpack 2

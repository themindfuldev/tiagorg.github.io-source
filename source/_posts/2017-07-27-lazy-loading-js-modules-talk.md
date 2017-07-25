---
title: Lazy Loading JS modules in the browser (talk)
tags: [javascript, lazy-loading, es6, es2015, commonjs, amd, requirejs, webpack, system.js, design patterns, forwardjs]
category: talk
---

I gave this talk on Mar 1st, 2017 at [Mobile+Web DevCon](http://mobilewebdevconference.com/san-francisco-2017)
 in **San Francisco, CA** and on July 27th, 2017 at [ForwardJS](https://forwardjs.com)
 in **San Francisco, CA**

This talk is an updated version of [Lazy Loading ES2015 modules in the browser](http://tiagorg.com/2016/12/08/lazy-loading-es2015-modules-talk/) is about loading code during page load time vs lazy loading, then how to load JS modules both synchronously (during page load) and asynchronously (lazy-load) using System.js over Babel, as well as how to used Webpack 2 to bundle your app and resolve dependencies.

#### What will the audience learn

- The fundamentals on when to load your modules (page load time vs lazy loading) for a most optimized page performance
- The ES Modules spec and System.js
- Importing modules synchronously and asynchronously
- Webpack 2 as a dependency management system

#### Slide deck
* At [Mobile+Web DevCon](http://mobilewebdevconference.com/san-francisco-2017) this session was a lab with challenges: [tiagorg.com/lab-lazy-loading-js-modules](http://tiagorg.com/lab-lazy-loading-js-modules/)
* At [ForwardJS](https://forwardjs.com) this session was a talk: [tiagorg.com/lazy-loading-js-modules](http://tiagorg.com/lazy-loading-js-modules/)

#### Resources
- [Lazy load EAA pattern](http://martinfowler.com/eaaCatalog/lazyLoad.html)
- [Webpack](https://webpack.github.io)
- [Webpack Code Splitting](https://webpack.github.io/docs/code-splitting.html)
- [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader)
- [Loader](https://whatwg.github.io/loader/)
- [System.js](https://github.com/systemjs/systemjs)
- [What's new in Webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)
- [ES6 Modules in Chrome Canary (M60+)](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7)
- [Native ES Modules — Ready for Prime Time?](https://hackernoon.com/native-es-modules-ready-for-prime-time-87c64d294d3c)

#### Sample repos
- [github.com/tiagorg/lazy-loading-js-modules](https://github.com/tiagorg/lazy-loading-js-modules) - Repo for the talk
- [github.com/tiagorg/lazy-load-es2015-webpack2-challenge](https://github.com/tiagorg/lazy-load-es2015-webpack2-challenge) - Challenge for the Lazy Loading JS Modules lab 

---
title: Lazy Loading ES2015 modules in the browser (article)
tags: [javascript, lazy-loading, es2015, es6, commonjs, amd, requirejs, webpack, system.js, jspm, design patterns, fedc, devcon5, abstractions, avenue code]
category: article
---

In September, 2016 I published an article on [Avenue Code Snippets](http://blog.avenuecode.com), about Lazy Loading ES2015 modules in the browser.

[Article Lazy Loading ES2015 modules in the browser - Avenue Code Snippets](http://blog.avenuecode.com/lazy-loading-es2015-modules-in-the-browser)

#### Abstract
Over the last few years, developers have been relentlessly moving their server-side sites to the client-side on the premise that the page performance would be improved.

However, this may not be enough. Have you ever considered that your site may be downloading more stuff than is being actually used? Meet Lazy-loading, a design pattern about deferring the initialization (loading/fetching/allocation) of a resource (code/data/asset) until the point at which it is needed.

This article demonstrates how to load ES2015 modules synchronously (during the page load) and asynchronously (performing lazy-loading) using System.js.
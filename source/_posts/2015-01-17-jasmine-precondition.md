---
title: jasmine-precondition
tags: [javascript, jasmine]
category: project
---

In January, 2015 I published the [jasmine-precondition project](https://github.com/tiagorg/jasmine-precondition) on GitHub. This project aims to implement a Jasmine instruction to ease setting up asynchronous pre-conditions before, during and after tests.

### Motivation

Since Jasmine 2.0, the **runs**, **waits**, and **waitsFor** methods have been removed in favor of allowing functions run as part of the spec to receive and invoke a **done** callback. This new approach is described at [Upgrading Jasmine - Asynchronous Specs](http://jasmine.github.io/2.1/upgrading.html#section-Asynchronous_Specs).

The **done** callback works great for asynchronous features with a callback (such as AJAX, jQuery animations or anything else with promises). However, there are yet other asynchronous features that will complete on their own and would be using **waitsFor** before Jasmine 2.0, like rendering Google Maps, images or anything else that can change both the DOM and the CSSOM.

While it is utterly possible to [re-implement **waitsFor**](https://gist.github.com/abreckner/110e28897d42126a3bb9) I believe that Jasmine 2.0 direction is more towards stepping away from this idea and instead taking more advantage of **done** callbacks, like putting one **it** block as a pre-condition for another.

Thus, the **preCondition** instruction defined here will simply poll a given conditional function at a certain time interval, and once its condition is met the callback **done** will be fired off.

### Current status

To the date, its version 0.0.3 can be used either standalone and through node.js, [available on NPM](https://www.npmjs.com/package/jasmine-precondition).

Travis CI status: <a href="https://travis-ci.org/tiagorg/jasmine-precondition"><img src="https://travis-ci.org/tiagorg/jasmine-precondition.svg?branch=master" title="Build Status Images"></a>

### Usage

**preCondition(condition, done, interval);**

where:
* **condition**: a conditional function that shall only return **true** when the condition you are expecting for is met.
* **done**: the **done** callback from **beforeEach**, **it** or **afterEach** must be passed here.
* **interval** (optional): a time interval in milliseconds between two **condition** executions. Default is 100.

### Example

{% gist 587553f71515682d81f7 example.js %}

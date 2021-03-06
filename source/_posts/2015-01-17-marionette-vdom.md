---
title: marionette-vdom
tags: [javascript, backbone.js, marionette.js, virtual-dom]
category: project
---

In January, 2015 I published the [marionette-vdom project](https://github.com/tiagorg/marionette-vdom) on GitHub. This project aims to implement [Marionette.js](http://marionettejs.com) views with [virtual-dom](https://github.com/Matt-Esch/virtual-dom), in a [React](http://facebook.github.io/react/) similar fashion.

### Motivation

One among React's top-notch features, virtual DOM is gaining momentum in the front-end development community. Since Marionette.js is a formidable and constantly evolving library, why not adding one good thing to another?

A key concern here is ensuring that whatever code implementing virtual DOM features won't break any existing functionality. That is why we have incorporated the whole test suite from Backbone.js and Marionette.js for the related classes, and all the 163 specs are passing.

### Current status

To the date, its version 0.1.2 is implementing VDOM versions for **Marionette.ItemView** and **Marionette.CollectionView**. It can be used through node.js, [available on NPM](https://www.npmjs.com/package/marionette-vdom).

Travis CI status: <a href="https://travis-ci.org/tiagorg/marionette-vdom"><img src="https://travis-ci.org/tiagorg/marionette-vdom.svg?branch=master" title="Build Status Images"></a>

### Usage

This module exposes **VDOMItemView** as the VDOM implementation for **Marionette.ItemView** and **VDOMCollectionView** for **Marionette.CollectionView**:

{% gist 527aa367224119570d0f marionette-vdom.js %}

### Example

{% gist 527aa367224119570d0f example.js %}

---
layout: post
title: titles.articles.understanding-and-optimizing-the-garbage-collection-part-1
description: "An article published in Java Magazine #102, about the Garbage Collection process in Java, detailing how do the JVM HotSpot 6 and 7 collectors work and how to optimize their behavior through JVM options."
tags: [article, java, garbage collection]
---
{% include JB/setup %}

On February, 2012 I published an article (in Portuguese) in Java Magazine #102, about the Garbage Collection process in Java, detailing how do the JVM HotSpot 6 and 7 collectors work and how to optimize their behavior through JVM options.

[Article Understanding and optimizing the Garbage Collection - Part 1 - DevMedia](http://www.devmedia.com.br/garbage-collection-entendendo-e-otimizando-revista-java-magazine-102-parte-1/24082)

#### Summary
This article presents concepts and metrics about Garbage Collection in Java, as well the categorization of the heap memory in generations. Next, presents the JVM HotSpot 6 and its overall operation with Garbage Collection, as much as its customization through JVM options. From here, explains about each collector, how does it operate, its customization options and implementations, making a final comparison illustrating when is it more proper to use each one of the available collectors. Yet, presents JVM HotSpot 7 and its new collector, its overall operation and customization options.

#### When is the subject useful
The subject is very relevant to any Java developer, even though the consequences of a badly configured Garbage Collection process won't be much evident in development environments, certainly will make the difference in production environments. It is important to understand the reasons that cause unexpected behavior in the Garbage Collection when operated by multiple processors and big data.

#### Links
 * [Java SE 6 HotSpot Virtual Machine Garbage Collection Tuning](http://www.oracle.com/technetwork/java/javase/gc-tuning-6-140523.html) Official documentation from Oracle about Garbage Collection in JVM HotSpot 6.
 * [Our Collectors](http://blogs.oracle.com/jonthecollector/entry/our_collectors) Collectors implementations on JVM HotSpot 6.
 * [The Garbage-First Garbage Collector](http://www.oracle.com/technetwork/java/javase/tech/g1-intro-jsp-135488.html) Official documentation from Oracle about the Garbage-First collector.
 * [Mark-and-Sweep Garbage Collection](http://www.brpreiss.com/books/opus5/html/page424.html) Detailed explanation about Mark-and-Sweep algorithm.
 * [Understanding Java Garbage Collection and What You Can Do about It](http://www.infoq.com/presentations/Understanding-Java-Garbage-Collection) Great presentation about Garbage Collection.

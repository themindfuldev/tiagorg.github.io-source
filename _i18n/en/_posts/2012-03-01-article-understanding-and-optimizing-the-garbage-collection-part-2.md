---
layout: post
title: titles.articles.understanding-and-optimizing-the-garbage-collection-part-2
description: "An article published in Java Magazine #103, about the operation of the colletors from the JVMs Oracle JRockit (WebLogic), IBM Virtual Machine for Java (WebSphere), those ones which implement JSR-1 (RTSJ) and Dalvik (Android)."
tags: [article, java, garbage collection]
---
{% include JB/setup %}

In March, 2012 I published an article (in Portuguese) in [Java Magazine #103](http://www.devmedia.com.br/revista-java-magazine-103/24382), about the operation of the colletors from the JVMs Oracle JRockit (used by WebLogic Java EE application server), IBM Virtual Machine for Java (used by WebSphere Java EE application server), those ones which implement JSR-1 (also known as Real-Time Specification for Java or RTSJ) and Dalvik (used by Android devices).

[Article Understanding and optimizing the Garbage Collection - Part 2 - DevMedia](http://www.devmedia.com.br/entendendo-e-otimizando-o-garbage-collection-revista-java-magazine-103-parte-2/24387)

#### Summary
This article begins by presenting the JVM Oracle JRockit and its heap memory configuration, its collectors and how to use them. Next, presents the JVM IBM Virtual Machine for Java, its heap memory configuration, its collectors and how to use them. From here, presents the JSR-1 specification and its concepts about developing real-time applications in Java, and demonstrates the operation of 5 real-time collectors. Yet, presents the JVM Dalvik and its challenges about Garbage Collection, as well its collector and improvements about memory management.

#### When is the subject useful
The subject is very relevant to Java developers which work with any of the aforementioned JVMs, to better understand the consequences of using these collectors in particular scenarios. Besides that, Java developers which don't yet work with any of those JVMs can learn how those options manage to solve in a different way the same challenges the JVM HotSpot faces, adding to your knowledge.

#### Links
 * [-X Command-line Options](http://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html) Official documentation from Oracle about JVM JRockit options.
 * [Java technology, IBM style: Garbage collection policies, Part 1](http://www.ibm.com/developerworks/java/library/j-ibmjava2/) JVM IBM collectors implementations.
 * [An Introduction to Real-Time Java Technology: Part 2, Garbage Collection and the Sun Java Real-Time System (Java RTS)](http://www.oracle.com/technetwork/articles/javase/index-138577.html) Official documentation from Oracle about Garbage Collection in JVMs which implement the RTSJ specification.
 * [Real-time Java, Part 4: Real-time garbage collection](http://www.ibm.com/developerworks/java/library/j-rtj4/index.html) Detailed explanation about the Metronome collector.

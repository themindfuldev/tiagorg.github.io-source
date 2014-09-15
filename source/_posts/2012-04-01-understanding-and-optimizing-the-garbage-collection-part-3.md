---
layout: post
title: Article - Understanding and optimizing the Garbage Collection - Part 3 [pt]
description: "An article published in Java Magazine #104, about common problems in Java code which ignore how Garbage Collection operates, how to write code to optimize this process and how to analyse the heap memory status in runtime."
tags: [java, garbage collection]
category: article
---

In April, 2012 I published an article (in Portuguese) in [Java Magazine #104](http://www.devmedia.com.br/revista-java-magazine-104/24723), about common problems in Java code which ignore how Garbage Collection operates, how to write code to optimize this process and how to analyse the heap memory status in runtime.

[Article Understanding and optimizing the Garbage Collection - Part 3 - DevMedia](http://www.devmedia.com.br/entendendo-e-otimizando-o-garbage-collection-revista-java-magazine-104-parte-3/24725)

#### Summary
The article begins by reviewing JVM options to log the Garbage Collection process activities as well presenting the JConsole tool for a picture of the heap memory situation. Next, states about memory leaks and shows an example of a code with this problem, analysing its runtime execution on JConsole. Lastly, presents other subjects as the finalize() method, weak references and concludes suggesting some good practices.

#### When is the subject useful
The subject is very relevant to any Java developer, even though the consequences of a badly configured Garbage Collection process won't be much evident in development environments, certainly will make the difference in production environments. It is important to understand the reasons that cause malfunctioning of the Garbage Collection and how to avoid those scenarios, using good practices for such.

#### Links
 * [Java Garbage Collection, Monitoring and Tuning](http://www.slideshare.net/caroljmcdonald/java-garbage-collection-monitoring-and-tuning) Carol McDonald presentation about Garbage Collection, monitoring and tuning.
 * [Using JConsole](http://docs.oracle.com/javase/1.5.0/docs/guide/management/jconsole.html) Official JConsole documentation.
 * [How to Handle Java Finalization's Memory-Retention Issues](http://www.devx.com/Java/Article/30192) DevX article about how to effectively manipulate objects finalization.
 * [Weak references: do you know what is it? - Java Magazine #99](http://www.devmedia.com.br/referencias-fracas-sabe-o-que-sao-revista-java-magazine-99/23308) Article about weak references published on Java Magazine #99.

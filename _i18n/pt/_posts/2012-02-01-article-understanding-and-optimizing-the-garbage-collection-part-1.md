---
layout: post
title: titles.articles.understanding-and-optimizing-the-garbage-collection-part-1
description: "Um artigo publicado na Java Magazine 102, sobre o processo de Garbage Collection em Java, apresentando o funcionamento dos collectors da JVM HotSpot 6 e 7 e como otimizar seu comportamento por meio de opções da JVM."
tags: [article, java]
---
{% include JB/setup %}

Em Fevereiro de 2012 eu publiquei um artigo (em português) na Java Magazine 102, sobre o processo de Garbage Collection em Java, apresentando o funcionamento dos collectors da JVM HotSpot 6 e 7 e como otimizar seu comportamento por meio de opções da JVM.

[Artigo Entendendo e otimizando o Garbage Collection - Parte 1 - DevMedia](http://www.devmedia.com.br/garbage-collection-entendendo-e-otimizando-revista-java-magazine-102-parte-1/24082)

#### Resumo
O artigo apresenta conceitos e métricas de Garbage Collection em Java, além da categorização da memória heap em generations. Em seguida, apresenta a JVM HotSpot 6 e seu funcionamento geral com relação à Garbage Collection, assim como a sua personalização através de opções da JVM. A partir daqui, explica sobre cada collector, seu funcionamento, suas opções de personalização e suas implementações, fazendo também um comparativo final mostrando quando é mais adequado utilizar cada um dos collectors disponíveis. Ainda, apresenta a JVM HotSpot 7 e seu novo collector, seu funcionamento e opções de personalização.

#### Em que situação o tema é útil
O tema é muito pertinente a qualquer desenvolvedor Java, pois por mais que as consequências de um processo de Garbage Collection mal configurado não apareçam muito em ambiente de desenvolvimento, certamente farão a diferença em ambiente de produção, e é importante entender os motivos que levam ao comportamento indesejado do Garbage Collection quando submetido a múltiplos processadores e grandes quantidades de dados.

#### Links
 * [Java SE 6 HotSpot Virtual Machine Garbage Collection Tuning](http://www.oracle.com/technetwork/java/javase/gc-tuning-6-140523.html) Documentação oficial da Oracle sobre Garbage Collection na JVM HotSpot 6.
 * [Our Collectors](http://blogs.oracle.com/jonthecollector/entry/our_collectors) Implementações de collectors da JVM HotSpot 6.
 * [The Garbage-First Garbage Collector](http://www.oracle.com/technetwork/java/javase/tech/g1-intro-jsp-135488.html) Documentação oficial da Oracle sobre o collector Garbage-First.
 * [Mark-and-Sweep Garbage Collection](http://www.brpreiss.com/books/opus5/html/page424.html) Explicação detalhada do algoritmo Mark-and-Sweep.
 * [Understanding Java Garbage Collection and What You Can Do about It](http://www.infoq.com/presentations/Understanding-Java-Garbage-Collection) Ótima apresentação sobre Garbage Collection.

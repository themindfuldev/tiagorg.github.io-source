---
layout: post
title: titles.articles.understanding-and-optimizing-the-garbage-collection-part-2
description: "Um artigo publicado na Java Magazine 103, sobre o funcionamento dos collectors das JVMs Oracle JRockit (WebLogic), IBM Virtual Machine for Java (WebSphere), as que implementam a JSR-1 (RTSJ) e Dalvik (Android)."
tags: [article, java, garbage collection]
---
{% include JB/setup %}

Em Março de 2012 eu publiquei um artigo (em português) na Java Magazine 103, sobre o funcionamento dos collectors das JVMs Oracle JRockit (utilizada pelo servidor de aplicações Java EE WebLogic), IBM Virtual Machine for Java (utilizada pelo servidor de aplicações Java EE WebSphere), as que implementam a JSR-1 (também conhecida como Real-Time Specification for Java ou RTSJ) e Dalvik (utilizada por dispositivos Android).

[Artigo Entendendo e otimizando o Garbage Collection - Parte 2 - DevMedia](http://www.devmedia.com.br/entendendo-e-otimizando-o-garbage-collection-revista-java-magazine-103-parte-2/24387)

#### Resumo
O artigo começa apresentando a JVM Oracle JRockit e suas configurações de memória heap, seus collectors e como utilizá-los. Em seguida, apresenta também a JVM IBM Virtual Machine for Java, suas configurações de memória heap, seus collectors e como utilizá-los. A partir daqui, apresenta a especificação JSR-1 e seus conceitos com relação ao desenvolvimento de aplicações de tempo real em Java, e demonstra o funcionamento de 5 collectors de tempo real. Ainda, apresenta a JVM Dalvik e seus desafios com relação a Garbage Collection, além de seu collector e melhorias com respeito ao gerenciamento de memória.

#### Em que situação o tema é útil
O tema é muito pertinente a desenvolvedores Java que trabalham com alguma das JVMs mencionadas acima, para entender mais a fundo as consequências da utilização de collectors frente a cenários particulares. Além disso, desenvolvedores Java que não trabalham com alguma destas JVMs poderão aprender como que estas opções solucionam os mesmos problemas de Garbage Collection que a JVM HotSpot de maneira diferente, acrescentando à sua bagagem de conhecimento.

#### Links
 * [-X Command-line Options](http://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html) Documentação oficial da Oracle sobre as opções da JVM JRockit.
 * [Java technology, IBM style: Garbage collection policies, Part 1](http://www.ibm.com/developerworks/java/library/j-ibmjava2/) Implementações de collectors da JVM IBM.
 * [An Introduction to Real-Time Java Technology: Part 2, Garbage Collection and the Sun Java Real-Time System (Java RTS)](http://www.oracle.com/technetwork/articles/javase/index-138577.html) Documentação oficial da Oracle sobre o Garbage Collection em JVMs que implementem a especificação RTSJ.
 * [Real-time Java, Part 4: Real-time garbage collection](http://www.ibm.com/developerworks/java/library/j-rtj4/index.html) Explicação detalhada do collector Metronome.


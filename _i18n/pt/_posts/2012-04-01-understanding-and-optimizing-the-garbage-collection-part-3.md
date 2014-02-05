---
layout: post
title: titles.articles.understanding-and-optimizing-the-garbage-collection-part-3
description: "Um artigo publicado na Java Magazine 104, sobre problemas comuns em códigos Java que ignoram o funcionamento do Garbage Collection, como escrever código para otimizar este processo e como analisar a situação da memória heap em tempo de execução."
tags: [article, java, garbage collection]
---
{% include JB/setup %}

Em Abril de 2012 eu publiquei um artigo (em português) na [Java Magazine 104](http://www.devmedia.com.br/revista-java-magazine-104/24723), sobre problemas comuns em códigos Java que ignoram o funcionamento do Garbage Collection, como escrever código para otimizar este processo e como analisar a situação da memória heap em tempo de execução.

[Artigo Entendendo e otimizando o Garbage Collection - Parte 3 - DevMedia](http://www.devmedia.com.br/entendendo-e-otimizando-o-garbage-collection-revista-java-magazine-104-parte-3/24725)

#### Resumo
O artigo começa revendo opções da JVM para logar as atividade do processo de Garbage Collection e também apresentando a ferramenta JConsole para visualização gráfica da situação da memória heap. Em seguida, disserta sobre vazamentos de memória e mostra um exemplo de código com este problema, analisando sua execução na ferramenta JConsole. Por fim, apresenta outros assuntos como o método finalize(), referências fracas e conclui sugerindo algumas boas práticas.

#### Em que situação o tema é útil
O tema é muito pertinente a qualquer desenvolvedor Java, pois por mais que as consequências de programas que não contribuem com o processo de Garbage Collection não apareçam muito em ambiente de desenvolvimento, certamente farão a diferença em ambiente de produção. É importante entender os motivos que levam ao deterioramento do Garbage Collection e como evitar estas situações, fazendo uso de boas práticas para tal.

#### Links
 * [Java Garbage Collection, Monitoring and Tuning](http://www.slideshare.net/caroljmcdonald/java-garbage-collection-monitoring-and-tuning) Apresentação de Carol McDonald a respeito de Garbage Collection, monitoramento e tuning.
 * [Using JConsole](http://docs.oracle.com/javase/1.5.0/docs/guide/management/jconsole.html) Documentação oficial do JConsole.
 * [How to Handle Java Finalization's Memory-Retention Issues](http://www.devx.com/Java/Article/30192) Artigo do DevX que explica como manipular a finalização de objetos efetivamente.
 * [Referências fracas: sabe o que são? - Revista Java Magazine 99](http://www.devmedia.com.br/referencias-fracas-sabe-o-que-sao-revista-java-magazine-99/23308) Artigo “Sabe o que são referências fracas?” publicado na Java Magazine 99 sobre referências fracas.

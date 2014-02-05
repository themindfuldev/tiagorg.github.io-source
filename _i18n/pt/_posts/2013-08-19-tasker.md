---
layout: post
title: titles.projects.tasker
description: "Um projeto de Kanban ágil utilizando Backbone.js e Handlebars.js no client-side e Play! sobre Java no server-side."
tags: [project, javascript, backbone.js, play]
---
{% include JB/setup %}

Em Agosto de 2013 eu publiquei o [Projeto Tasker](http://github.com/tiagorg/tasker) no GitHub para ilustrar o artigo que eu escrevi para a revista Java Magazine 123, [Turbinando aplicações com REST e Backbone.js]({% if site.lang == "pt" %}/pt{% endif %}/article-boosting-applications-with-rest-and-backbone-js).

Tasker é uma aplicação web utilizando Backbone.js e Handlebars.js no client-side e Play! sobre Java no server-side. Esta aplicação simula um quadro Kanban simples baseado em metodologias Ágeis. Basicamente, o quadro pode ter diversos projetos, onde cada projeto pode ter diversas estórias e cada estória pode possuir diversos itens, que podem ser tarefas, defeitos ou melhorias.

O usuário pode criar e remover projetos, estórias e itens, além de poder mover itens por 4 colunas representando seus estados possíveis: Em espera, Em progresso, A verificar e Aprovado.

### Propósito

O propósito principal de Tasker é demonstrar conceitos importantes de front-end de hoje em dia sobre aplicações inteligentes no client-side, como:

#### Client-side

 * MV* no client-side com Backbone.js
   * models baseados em REST
   * views
   * routers
   * eventos
   * validação
 * Templates com Handlebars.js
   * Custom helpers
 * Usando componentes Bootstrap
 * Usando ícones Font Awesome
 * Escrevendo css com LESS
 * i18n no front-end
 * Layout responsivo/adaptivo

### Server-side

 * Play! Framework como um moderno, simples e poderoso back-end
   * models
   * views
   * controllers
   * routers baseados em REST
   * compilação e minificação com Google Clojure
 * Ebean como um simples ORM
   * mapeamento baseado em JPA
   * linguagem de consultas simples
   * evolutions
 * Manipulação de JSON com Flexjson
 * Testes unitários com TestNG
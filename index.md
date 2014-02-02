---
layout: page
title: titles.about-me
---
{% include JB/setup %}

<p>{% t index.main %}</p>
<p><img src="http://2.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?size=400px" class="picture"></p>

### Coderwall badges
<div id="coderwall"></div>

Posts
{{ site }}
  {% for post in site.posts %}
    <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
  {% endfor %}

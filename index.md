---
layout: page
title: titles.about-me
---
{% include JB/setup %}

<p>{% t index.main %}</p>
<p><img src="http://2.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c?size=300px" class="picture"></p>

### Coderwall badges
<div id="coderwall"></div>

### Recent activity
{% assign posts_list = site.posts limit: 5 %}
{% include JB/posts_list %}
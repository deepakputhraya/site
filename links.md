---
layout: links
title: Links
permalink: /links/
---

<div class="wrapper" id="links">
    
    Awesome people with amazing blogs.
    <ul>
    {% for people in site.data.people %}
        <li><a href="{{ people.url }}" target="_blank">{{ people.title }}</a></li>
    {% endfor %}
    </ul>
    
    Few of my favourite articles that I enjoyed and I would recommend people to read.    
    <ul>
    {% for article in site.data.articles %}
        <li><a href="{{ article.url }}" target="_blank">{{ article.title }}</a></li>
    {% endfor %}
    </ul>

</div>

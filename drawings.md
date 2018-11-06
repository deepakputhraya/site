---
layout: drawings
title: Drawings
permalink: /drawings/
---

<div class="columns" id="drawings">
    {% assign sorted = site.data.drawings | reverse %}
    {% for art in sorted %}
        <a href="{{ art.url }}">
            <figure class="column">
                <img src="{{ art.url}}">
                <figcaption>{{ art. title }}</figcaption>
            </figure>
        </a>
    {% endfor %}
</div>

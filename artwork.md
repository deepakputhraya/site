---
layout: artwork
title: Artwork
permalink: /drawings/
---

<div>
    <div id="columns">
        {% assign sorted = site.data.artwork | reverse %}
        {% for art in sorted %}
            <a href="{{ art.url }}">
                <figure>
                    <img src="{{ art.url}}">
                    <figcaption>{{ art. title }}</figcaption>
                </figure>
            </a>
        {% endfor %}
    </div>
</div>
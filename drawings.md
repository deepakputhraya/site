---
layout: drawings
title: Drawings
permalink: /drawings/
---

<div class="columns is-multiline is-mobile" id="drawings">
    {% assign sorted = site.data.drawings | reverse %}
    {% for art in sorted %}
    <div class="column is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <a title="{{ art.title }}" href="{{ art.url }}" target="_blank">
            <figure>
                <img src="{{ art.url}}">
                <figcaption>{{ art. title }}</figcaption>
            </figure>
        </a>
    </div>
    {% endfor %}
</div>

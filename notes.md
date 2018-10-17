---
layout: page
title: Notes
permalink: /notes/
---


<ul class="list-posts">
    {% assign sorted = site.notes | reverse %}
    {% for note in sorted %}
        <li class="post-teaser">
            <a href="{{ note.url | prepend: site.baseurl }}">
                <h3 class="post-teaser__title">
                    {{ note.title }}
                     <span class="post-teaser__date">{{ note.date | date: "%d %B %Y" }}</span>
                </h3>
                </a>
                 <span class="post-teaser__subtitle">
                    {{ note.excerpt | strip_html | truncatewords:30}}<br>
                    <a href="{{ note.url }}" class="readmore">Read more...</a><br><br>
                 </span>
        </li>
    {% endfor %}
</ul>

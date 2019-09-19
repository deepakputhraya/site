---
layout: note_page
title: Notes
permalink: /notes/
---

<div class="columns is-centered is-mobile is-gapless">
    <div id="text" class="column is-three-quarters-mobile is-half-tablet">
        {% assign sorted = site.notes | reverse %}
        {% for note in sorted %}
            <div class="post-teaser">
                <h3 class="post-teaser__title">
                     <a title="{{ note.title }}" href="{{ note.url | prepend: site.baseurl }}" class="note-teaser__title">{{ note.title }}</a>
                     <span class="post-teaser__date">{{ note.date | date: "%d %B %Y" }}</span>
                </h3>
                 <span class="post-teaser__subtitle">
                    {{ note.excerpt | strip_html | truncatewords:30}}<br>
                    <a title="{{ note.title }}" href="{{ note.url }}" class="readmore">Read more...</a><br><br>
                 </span>
            </div>
        {% endfor %}
    </div>
</div>

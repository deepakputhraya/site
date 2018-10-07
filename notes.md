---
layout: page
title: Notes
permalink: /notes/
---


<ul class="list-notes">
    {% for note in site.notes%}
        <li class="note-teaser">
            <a href="{{ note.url | prepend: site.baseurl }}">
                <h3 class="note-teaser__title">
                    {{ note.title }}
                </h3>
            </a>
        </li>
    {% endfor %}
</ul>

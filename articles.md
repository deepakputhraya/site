---
layout: article_page
title: Articles
permalink: /articles/
---

<ul class="list-posts">
    {% for post in site.posts %}
        <li class="post-teaser">
            <h3 class="post-teaser__title">
                 <a href="{{ post.url | prepend: site.baseurl }}" class = "post-teaser__title">{{ post.title }} </a>
                 <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
            </h3>
             <span class="post-teaser__subtitle">
                {{ post.excerpt | strip_html | truncatewords:30}}<br>
                <a href="{{ post.url }}" class="readmore">Read more...</a><br><br>
             </span>
        </li>
    {% endfor %}
</ul>

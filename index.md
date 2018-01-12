---
layout: page
sitemap:
  priority: 0.9
---

<ul class="list-posts">
    {% for post in site.posts %}
        <li class="post-teaser">
            <a href="{{ post.url | prepend: site.baseurl }}">
                <h3 class="post-teaser__title">
                    {{ post.title }}
                     <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
                </h3>
                <!-- <span class="post-teaser__subtitle">{{ post.subtitle }}</span> -->
            </a>
        </li>
    {% endfor %}
</ul>

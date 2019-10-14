---
layout: home
sitemap:
  priority: 0.9
---

<div class="columns is-centered is-mobile is-gapless">
    <div id="text" class="column is-three-quarters-mobile is-half-tablet">
        <h2>Articles</h2>
        {% for post in site.posts limit:3%}
            <div class="post-teaser">
                    <h3 class="post-teaser__title">
                         <a href="{{ post.url | prepend: site.baseurl }}" class="post-teaser__title">{{ post.title }} </a>
                         <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
                    </h3>
                     <span class="post-teaser__subtitle">
                        {{ post.excerpt | strip_html | truncatewords:50}}<br>
                        <a href="{{ post.url }}" class="readmore">Read more...</a><br><br>
                     </span>
            </div>
        {% endfor %}
        Older articles available <a href="{{ "/articles" | prepend: site.baseurl }}" class="readmore">here</a>.
        <hr style="background-color: #ccc; height: 1px"/>
        <h2>Notes</h2>
        {% assign sorted = site.notes | reverse %}
        {% for note in sorted limit:3%}
            <div class="post-teaser">
                    <h3 class="post-teaser__title">
                         <a href="{{ note.url | prepend: site.baseurl }}" class="post-teaser__title">{{ note.title }}</a>
                         <span class="post-teaser__date">{{ note.date | date: "%d %B %Y" }}</span>
                    </h3>
                     <span class="post-teaser__subtitle">
                        {{ note.excerpt | strip_html | truncatewords:50}}<br>
                        <a href="{{ note.url }}" class="readmore">Read more...</a><br><br>
                     </span>
            </div>
        {% endfor %}
        Older notes available <a href="{{ "/notes" | prepend: site.baseurl }}" class="readmore">here</a>.
    </div>
</div>

---
layout: home
sitemap:
  priority: 0.9
---

<div id="home">
    <div id="flexcontainer-index" class="flexcontainer">
        <div id="text">
            <h2>Articles</h2>
            {% for post in site.posts limit:3%}
                <div class="post-teaser">
                    <a href="{{ post.url | prepend: site.baseurl }}">
                        <h3 class="post-teaser__title">
                            {{ post.title }}
                             <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
                        </h3>
                         <span class="post-teaser__subtitle">
                            {{ post.excerpt | strip_html | truncatewords:20}}<br>
                            <a href="{{ post.url }}" class="readmore">Read more...</a><br><br>
                         </span>
                    </a>
                </div>
            {% endfor %}
            Older articles available <a href="{{ "/articles" | prepend: site.baseurl }}" class="readmore">here</a>.
            <hr/>
            <h2>Notes</h2>
            {% assign sorted = site.notes | reverse %}
            {% for note in sorted limit 3%}
                <div class="post-teaser">
                    <a href="{{ note.url | prepend: site.baseurl }}">
                        <h3 class="post-teaser__title">
                            {{ note.title }}
                             <span class="post-teaser__date">{{ note.date | date: "%d %B %Y" }}</span>
                        </h3>
                        </a>
                         <span class="post-teaser__subtitle">
                            {{ note.excerpt | strip_html | truncatewords:20}}<br>
                            <a href="{{ note.url }}" class="readmore">Read more...</a><br><br>
                         </span>
                </div>
            {% endfor %}
            Older notes available <a href="{{ "/notes" | prepend: site.baseurl }}" class="readmore">here</a>.
        </div>
        <div id="photo">
            {% assign artwork = site.data.drawings | reverse | first %}
            <figure>
                <img src="{{ artwork.url}}">
                <figcaption>{{ artwork.title }}</figcaption>
            </figure>
        </div>
    </div>
</div>
---
layout: home
sitemap:
  priority: 0.9
---

<div id="home" class="columns">
    <div id="text" class="column">
        <h2>Articles</h2>
        {% for post in site.posts limit:3%}
            <div class="post-teaser">
                    <h3 class="post-teaser__title">
                         <a href="{{ post.url | prepend: site.baseurl }}" class="post-teaser__title">{{ post.title }} </a>
                         <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
                    </h3>
                     <span class="post-teaser__subtitle">
                        {{ post.excerpt | strip_html | truncatewords:20}}<br>
                        <a href="{{ post.url }}" class="readmore">Read more...</a><br><br>
                     </span>
            </div>
        {% endfor %}
        Older articles available <a href="{{ "/articles" | prepend: site.baseurl }}" class="readmore">here</a>.
        <hr style="background-color: #F5F5F5; height: 1px"/>
        <h2>Notes</h2>
        {% assign sorted = site.notes | reverse %}
        {% for note in sorted limit 3%}
            <div class="post-teaser">
                    <h3 class="post-teaser__title">
                         <a href="{{ note.url | prepend: site.baseurl }}" class="post-teaser__title">{{ note.title }}</a>
                         <span class="post-teaser__date">{{ note.date | date: "%d %B %Y" }}</span>
                    </h3>
                     <span class="post-teaser__subtitle">
                        {{ note.excerpt | strip_html | truncatewords:20}}<br>
                        <a href="{{ note.url }}" class="readmore">Read more...</a><br><br>
                     </span>
            </div>
        {% endfor %}
        Older notes available <a href="{{ "/notes" | prepend: site.baseurl }}" class="readmore">here</a>.
    </div>
    <div id="photo" class = "column is-hidden-mobile">
        <figure>
            <img src="https://dl.dropboxusercontent.com/s/wzk9jyi59es62cu/astronaut-pencils.jpg?dl=0">
            <figcaption>"Astronaut"</figcaption>
        </figure>
    </div>
</div>

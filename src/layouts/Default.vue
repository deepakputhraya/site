<template>
  <div class="md:w-6/12 sm:w-10/12 m-auto">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/articles/">Articles</g-link>
        <g-link class="nav__link" to="/notes">Notes</g-link>
        <g-link class="nav__link" to="/drawings">Drawings</g-link>
        <g-link class="nav__link" to="/links">Links</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
        <!-- Begin Mailchimp Signup Form -->
        <div id="newsletter" class="bg-newsletter bg-gray-100">
          <h2>Newsletter</h2>
          <p>I occasionally send an email newsletter with articles handpicked from 100+ sources of information. If
            you’re someone who likes knowing/doing new cool things – you should sign up. It's pretty cool.</p>
          <form action="https://puthraya.us4.list-manage.com/subscribe/post?u=2342d3bd4a7665ec0b913d439&amp;id=30f5c02240"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <input type="email" placeholder="Email Address" value="" name="EMAIL" class="required email"
                     id="mce-EMAIL">
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_2342d3bd4a7665ec0b913d439_30f5c02240" tabindex="-1" value="">
              </div>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
            </div>
          </form>
          <p style="font-size: 0.8em">This information will only be used to send you this newsletter. It is stored in
            <a href="https://mailchimp.com/legal/privacy/" target="_blank">Mailchimp.</a></p>
        </div>
        <!--End mc_embed_signup-->
        <div class="social-links">
          <a title="Github" :href="$static.metadata.author.github" class="social-links__entry" target="_blank">
            <span class="icon">
              <i class="">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </i>
            </span>
          </a>

          <a title="Twitter" :href="$static.metadata.author.twitter" class="social-links__entry" target="_blank">
            <span class="icon">
              <i class="">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </i>
            </span>
          </a>

          <a title="LinkedIn" :href="$static.metadata.author.linkedin" class="social-links__entry" target="_blank">
            <span class="icon">
              <i class="">
                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                <path stroke-width="1.8" d="m5.839218,4.101561c0,1.211972 -0.974141,2.194011 -2.176459,2.194011s-2.176459,-0.982039 -2.176459,-2.194011c0,-1.211094 0.974141,-2.194011 2.176459,-2.194011s2.176459,0.982917 2.176459,2.194011zm0.017552,3.94922l-4.388022,0l0,14.04167l4.388022,0l0,-14.04167zm7.005038,0l-4.359939,0l0,14.04167l4.360816,0l0,-7.370999c0,-4.098413 5.291077,-4.433657 5.291077,0l0,7.370999l4.377491,0l0,-8.89101c0,-6.915523 -7.829986,-6.66365 -9.669445,-3.259423l0,-1.891237z"></path>

                </svg>
              </i>
            </span>
          </a>

          <a title="RSS" href="/feed.xml" class="social-links__entry" target="_blank">
              <span class="icon">
                <i class="">
                  <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                    <path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
                  </svg>
                </i>
            </span>
          </a>
        </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    author {
      github,
      twitter,
      linkedin
    }
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  color: rgba(0,0,0,.5);
  margin-left: 20px;
  font-weight: 500;
  transition: all 200ms linear;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 5px 0 !important;
}
.nav__link:hover {
  color: black;
}
.nav__link:after{
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: '';
  background-color: black;
  opacity: 0;
  transition: all 200ms linear;
}
.nav__link:hover:after{
  bottom: 0;
  opacity: 1;
}
.nav__link.active:hover:after{
  opacity: 1;
}

.social-links {
  fill: none;
  line-height: 20px;
  stroke: rgb(66, 70, 76);
  border-color: rgb(66, 70, 76);
  color: rgb(66, 70, 76);
  list-style-type: none;
  text-align: center;
  margin-top: 2em;
}

.social-links__entry {
  border-color: rgb(66, 70, 76);
  background: transparent;
  display: inline-block;
  margin-left: 10px;
}

svg {
  width: 24PX;
  border-color: rgb(66, 70, 76);
}

.social-links__entry:hover {
  fill: black;
}

#newsletter {
  line-height: 32px;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 5em;
  padding: 1em;
  text-align: center;
}

#newsletter form {
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
}

#newsletter form input {
  display: inline;
  padding: 0.8em;
  border-style: inset;
  border-color: black;
  border-width: 1px;
}

#newsletter form input[type=email] {
  min-width: 300px;
  margin-right: 5px;
}

#newsletter form input[type=submit] {
  box-shadow: inset 0 0 0 1px #272727;
  text-transform: uppercase;
  background-color: ghostwhite;
}

#newsletter a {
  color: #303030;
  border-bottom: 1px solid #303030;
}

@media (max-width: 800px) {
  #newsletter form input[type=submit] {
    margin-top: 10px;
    width: 100%;
  }
}
</style>

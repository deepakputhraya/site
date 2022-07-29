---
layout: post
title:  "Say Yes to Technical Debt"
extra:
  subtitle: "Good & Bad Technical Debt"
date: 2018-08-10 02:06:35
cover: assets/images/tech-debt.jpeg
categories: [code]
---


Technical Debt is usually referred to as something Bad. Most articles on the topic are about how to get rid of technical debt. Having been influenced by such articles, I shunned hacks, features that were poorly designed or features without much test coverage. However, I have been thinking quite the opposite recently. Is debt bad? What effect would the technical debt have on future development projects? How will it affect related features and tasks? If this is a peripheral feature that is not likely to be used in the coming months, maybe a technical debt is okay, and I could use the extra time to move the product further.

Think of technical debt as anything about your code that slows you down over the long term. Hard-to-read code, lack of test automation, duplication, tangled dependencies.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;What is technical debt?&quot; Technical debt is hard to explain, but a picture is worth a thousand words. <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">#programming</a> <a href="https://twitter.com/hashtag/softwaredevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#softwaredevelopment</a> <a href="https://t.co/AG2L3VDuKZ">pic.twitter.com/AG2L3VDuKZ</a></p>&mdash; Jedd Ahyoung (@Jedd_Ahyoung) <a href="https://twitter.com/Jedd_Ahyoung/status/826551935822077952?ref_src=twsrc%5Etfw">January 31, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

After [Playment](https://playment.io "Playment's website") launched its [annotation platform](https://app.playment.io "Playment's annotation platform"), we set out to build an onboarding tool for our platform so that we could mitigate the number of users that were dropping off after signups. Product owner wanted us to build a simple onboarding experience for the first time web users. They wanted us to ship the feature real quick so that they could test & iterate over it. We built a quick & dirty feature that required a developer's help to set up the onboarding flow, but it worked. The feature was poorly designed,  not very extendible & had few test cases. After having released the feature, we could see that many users were now completing the onboarding flow, earning few bucks & continued to do other tasks on our Platform. The code ended up being untouched for over 6 months till we decided to extend the feature into onboarding experience for projects.

![](/assets/images/sample_onboarding.png)
*Sample onboarding flow*

However, when we wanted to continue the product line we realised it was good that we left it half done because what we intend to do now over the same feature happened to be a much better thing than what we thought we would do, which wasn't possible in hindsight at all. It was right for us to have taken the quick & dirty approach to problem-solving rather than the correct & tedious one.


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Technical debt is bad, but (more often than not) optimal.</p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/855342574063800320?ref_src=twsrc%5Etfw">April 21, 2017</a></blockquote>

As developers, we are quick to attacking a problem & trying to find the right approach. We try to cover cases that would likely not arise or if they do they probably far out in the future. At least, this is the truth for most startups. Sure that database query would break if there were 1M entries users, But we probably need to make lot more features so that we can reach that 1M mark.

Tech debt stinks, it slows down development & creates quality issues. It can have a negative impact when scaling up. Refactoring code to reduce tech debt is painful & resource distraction.

At Playment, lead-engineers try to keep a track of tech debt, classify easy fixes to fundamental architecture design flaws. A small percentage of engineering effort goes into lessening tech debt every release. We strive to set expectations that refactoring is part of our job, showcasing excellent refactoring(eg: small demo of the code). At times its fun & feels great after removing large amount dead code.

> Tech debt is often a "damned if you do, damned if you don't" problem.
> <br><b>\- Survival to Thrival </b>

There is a time and a place to reduce technical debt, but it’s not as crucial as most engineers think.

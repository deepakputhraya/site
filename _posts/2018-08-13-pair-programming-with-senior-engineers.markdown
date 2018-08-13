---
layout: post
title:  "Pair programming & Senior Engineers"
subtitle: "Impact of pair programming on senior engineers"
date: 2018-08-13 12:10:22
categories: [code]
---


From Wikipedia:
Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.

If you have been in the industry for a while, you have probably seen two engineers working together either racking their brains on a bug, discussing how to improve the code quality in a particular area or hacking together a feature! Well, all those are instances of pair programming.

I had briefly talked about this once & how pair programming benefited me as a rookie engineer. However, I always wondered what it was for a senior engineer or manager. What is it that they gained from pairing together with a junior developer? It seemed such a waste of their time for me.

I have been on both the sides now feel that it is a lot more beneficial to senior engineers & I strongly feel that organisations would benefit a lot more with engineers pair programming. Pair programming solves many problems that are sometimes really hard to solve with "processes", especially for small organisations.

<img src='https://i.redd.it/kg3cgpznfql01.jpg'/>

## Onboarding
Companies have unique processes to onboard new engineers. They are generally assigned buddies who help new engineers with their problem. They are given simple tasks or features to complete so that they get accustomed to the engineering processes. Though completing these tasks gives the engineer a sense of fulfilment, it lacks depth. In small startups, documentation could be lacking, there is no explanation as to why there was a hack, or there might be few bad practices from your early days of coding lying around which could get picked up as "best practice" by the engineer.

You could take a few hours to pair with them to explain some of the best practices used. Warn them about the pitfalls lying around & probably even pointing them out to various other team members for help if needed for a particular section of code.

## Code Quality
When developing features due to various reasons, there are various times when we incur technical debt. Some of these are fixed over a period when developments happen in the future. Some bad practices could lie around for months.

When pairing with other engineers, you could take the opportunity to point out these "bad code" parts that could need attention in the future. They would empathise with you after seeing the tech debt the team has incurred and could volunteer to help remove the tech debt.

## Debugging Bugs
Debugging at times seems more like an art than science. They are at times harder than making a feature itself. Debugging can be intimidating. Pairing with junior engineers is a great opportunity to impart great debugging skills  & an excellent opportunity to assess the code quality that you probably missed out on in your review.

Engineer move out of teams or take a more critical role where they are mostly dealing with people or dealing with only essential services or features. At such times they miss out on code reviews and tech debt is occurred without the knowledge of incurring tech debt. Debugging is an opportunity to get more hands-on & assess the current state of the codebase.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">pair programming is not a &quot;go faster&quot; strategy, it is a &quot;waste less&quot; strategy (which often results in going faster)</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/565921158025842688?ref_src=twsrc%5Etfw">February 12, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Improving engineering practices
As engineers, we are not just building features for our customers. We are also building tools that help us ship features faster. Be it setting up code guidelines or CI/CD pipeline or introducing cool new tech into your stack. When senior engineers pair with other engineers they see things that other engineers might miss out.

For example, to test a feature manually, it could require a lot of test data or manual inputs. In such cases, others would enter them manually; you would see that as an opportunity to write simple scripts to automate the process & commit them so that others can use them in the future. Alternatively, you noticed a lack of initial data & decide to invest in using embedded datasets or a solution that speeds up development. Pair programming is a great tool to identify such cases.

## Team bonding
Last but not the least it is a great way to connect with your colleagues. When you pair program the sense of superiority is lost & you don't just complain about the need to put semicolons everywhere, but also share your favourite Rick & Morty episodes.

## Conclusion
Pair programming is a fantastic engineering practice & every organisation should encourage it. It is an excellent way to reduce technical debt, increase team bonding, improve development practices & share knowledge across the organisation.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">pair programming works best with a large uncertain search space of problems and solutions. the closer to a solved problem, the less it helps</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/253532726714580992?ref_src=twsrc%5Etfw">October 3, 2012</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

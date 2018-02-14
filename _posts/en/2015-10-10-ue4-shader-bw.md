---
layout: posts
title: "UE4 Shader - Black and White"
date: 2015-10-10
categories: processing programming
css: blog_post.css
lang: en
image: /assets/posts_old/tumblr_nvtr193TdQ1tbhz3oo2_500.png
---

Black and White two tones shader - UE4<!--break-->

![Original]({{ "/assets/posts_old/tumblr_nvtr193TdQ1tbhz3oo1_500.png"}})

![Shader 1]({{ "/assets/posts_old/tumblr_nvtr193TdQ1tbhz3oo2_500.png"}})

![Shader 2]({{ "/assets/posts_old/tumblr_nvtr193TdQ1tbhz3oo3_500.png"}})

The first image is the original, the second have 0.25 of threshold, the third have 0.75 threshold.

As you see, the white is not really white; I believe that the threshold is good depending of the purpose: the first is real good to nearest objects, the second to farthest; we can make the shader change the threshold by the distance, but I believe that it can make you lose the sense of distance, that don’t happen with the constant threshold.

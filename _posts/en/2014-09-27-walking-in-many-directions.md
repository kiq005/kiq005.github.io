---
layout: posts
title: "Walking in Many directions"
date: 2014-09-27
categories: udk animation game_development
youtube: true
css: blog_post.css
lang: en
image: "/assets/posts_old/tumblr_inline_ncknzpOTMD1sg03xy.png"
---

This is a problem that I had, and searching for solutions, I see that some people had the problem too, they made solutions, but that solutions don’t work very well for me.<!--break--> First I had published this solution in my Portuguese website, <http://wwwkaiquedequeiroz.com>. Here is a video to show the problem:

{% include y code=u31d7UCRn1c %}

Here we can see two problems: First, the animTree play the front or back animation when you move alternately to left and right. Second, the animTree play the wrong animation when you move to back and side simultaneously.

I’ve found two solutions searching the Internet:

<http://focus.gscept.com/2012ip12/2012/03/13/animnodeblenddirectional-short-pause-in-looping-animation/>

That first one, is were I found the video, and the best solution for the first problem. Here, we set, in animTree, in your `animNodeBlendDirectional` the `DirDegreesPerSecond` to a high number (like 360000), this will make impossible to see the animTree playing the front-back animation, but the character play instantly the side animation.

This second one, looks like a good solution, but don’t work for me, because it weakens the animation (it don’t play the full animation, but a blended animation), and don’t look good. But I made my solution based in this.

Solution:

First of all, in “Pawn” script, we must create an variable that get the direction of the character.

```UnrealScript
var float direction;
```

Then, in function `Tick` we add:

```UnrealScript
simulated event Tick(float DeltaTime)
{
    super.Tick(DeltaTime);
    direction = Vector(Rotation) dot Normal(Velocity);
}
```

Now, in animTree, in your `blendByDirectional`, we had to add two `animBlendByProperty` (one in left output of `animNodeBlendDirectional`, and other to right output) with the `Property Name` equals to `direction`, and `FloatPropMin/Max` values that on [-1, 1] range (-1 and 0 works for me). Then, its will be looking like this:

![Anim Node Blend By Property]({{ "/assets/posts_old/tumblr_inline_ncknzl4eQn1sg03xy.png"}})
![AnimTree]({{ "/assets/posts_old/tumblr_inline_ncknzpOTMD1sg03xy.png"}})

I’ve made this some time ago and in Portuguese, but thats look like the explanation.

I hope it helps, and any question, send me an email. Thanks.

Original Post: <https://kiq005.tumblr.com/post/98566157259/walking-in-many-directions>

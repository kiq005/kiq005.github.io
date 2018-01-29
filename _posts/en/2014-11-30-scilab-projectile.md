---
layout: posts
title: "Scilab Projectile"
date: 2014-11-30
categories: scilab physics math animations programming
css: blog_post.css
lang: en
---

Here is the function:<!--break-->

```Scilab
function [d] = projetil(v0,a, color)
    a=a*%pi/180;
    vx=v0*cos(a);
    vy=v0*sin(a);
    dt=0.01;
    x=0;
    y=0;
    t=0;
    g=9.8;
    while y>=0
        x=vx*t;
        y=vy*t-((g*(t^2))/2);
        t=t+dt;
        plot(x, y, color);
        name=‘graf’+string(x)+’.gif’
        xs2gif(0,name);
    end
    d=x;
endfunction
```

And the results:

![Blue]({{ "/assets/posts_old/tumblr_necb12W7wv1tbhz3oo1_500.gif"}})

![Red]({{ "/assets/posts_old/tumblr_necb12W7wv1tbhz3oo3_500.gif"}})

![Green]({{ "/assets/posts_old/tumblr_necb12W7wv1tbhz3oo2_500.gif"}})

The properties:
- Blue:Initial Speed=10, Angle=15°
- Red:Initial Speed=20, Angle=15°
- Green:Initial Speed=10, Angle=30°

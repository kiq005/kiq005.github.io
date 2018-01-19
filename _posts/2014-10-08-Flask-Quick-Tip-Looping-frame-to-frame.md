---
layout: posts
title: "Flash Quick Tip - Looping frame-to-frame"
date: 2014-10-08
categories: flash actionscript quicktip
css: blog_post.css
---

This a quick tip to use in ActionScript. To create a frame-by-frame loop to Movie Clip, use these functions:<!--break-->

```ActionScript
function next(mc:MovieClip)
{
     if (mc.totalFrames == mc.currentFrame){
          mc.gotoAndPlay(1);
     }
     else{
          mc.nextFrame();
     }
}
function prev(mc:MovieClip)
{
     if (mc.currentFrame == 1){
          mc.gotoAndPlay(mc.totalFrames);
     }
     else{
          mc.prevFrame();
     }
}
```

These functions can send your MovieClip to the next frame and goes to the first when you are in the last frame of the sequence. This also send the MC to the last frame when you’re going back in the first frame.

Hope it helps, any question send me an message, thanks!
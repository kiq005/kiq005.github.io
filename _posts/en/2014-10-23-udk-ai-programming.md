---
layout: posts
title: "UDK AI Programming"
date: 2014-10-23
categories: udk programming ai
css: blog_post.css
lang: en
---

UDK AI programming

Some of most important functions and events of UnrealScript to program Artificial Intelligence. This is another post that I’m translating of my Portuguese site(Portuguese postage).<!--break-->

Functions -

- FindRandomDest() – Return any of yours NavigationPoints.
- PointReachable(vector) - Return a bool, if the path to the point is free [true].
- ActorReachable(actor) - Same as above, but check a path to “actor”.
- LineOfSightTo(actor) - Return a bool, if the actor is on eye range[true].
- CanSee(pawn) - Same as above, but consider primary and peripheral field of vision.
- MoveTo(vector, actor, bool) - Move to “vector”, looking at “actor”, if “bool” is true.
- MoveToward(actor, actor, float, bool, bool) - Same as above, but move to an “actor”, for “float” time.


Events-

- SeePlayer(pawn) - Called when a Pawn, with bIsPlayer=true, is on line of sight. Gives you the Pawn.
- SeeMonster(pawn) - Same as above, but with bIsPlayer=false. Gives you the Pawn.
- EnemyNotVisible - Called when an Enemy Pawn is no more visible.
- HearNoise(float, actor) - Called when a sound play near. Gives you the “actor” that play the sound, and the “float” volume.
- NotifyTakeHit(pawn, vector, int, class, vector) - Called when take hit. Gives you the Pawn that do the hit, the vector of hit, the int of damage, the class of damage, and the vector of impulse.
- NotifyAddInventory(inventory) - Called when get a new item.
- PrepareForMove(NavigationPoint, ReachSpecPath) - Called when this pawn can’t reach some point with the current configuration. Gives you the NavigationPoint that is not reachable, and the path of ReachSpecPath. -Usually, the A.I. duck (or jump) to try continue, but you can try a better solution.

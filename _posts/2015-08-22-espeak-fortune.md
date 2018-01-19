---
layout: posts
title: "Ubuntu: IF & Strings; And let it talk!"
date: 2015-08-22
categories: linux ubuntu bash programming
css: blog_post.css
---

Some of these days, I’m testing the Espeak, a text-to-speech program for Linux. It’s funny and it works! Then I find a program(here you can see the original, the site is in portuguese), a bash file, that I decide to improve a little bit.<!--break-->

I had never programed bash files before that, but it’s not so hard, and looks easier than program windows batch files(In true they are similar). Doing that, I had a problem when have I done an if statement between a string variable and a string it self(Like “ is x equals to ‘abc’?). I saw that a lot of people have this issue too. After some time it works, and there is no secret, you use “$” to say that it is an variable and then compare with the String that you want. So, I decide to post the little program just to exemplify the use.

```bash
#!/bin/sh
hour=‘date  +%-H’
minute=‘date +%-M’
dayWeek=‘date +%A’
dayMonth=‘date +$-d’
month=‘date +%B’
year=‘date +%Y’

if [ $hour > 19 ]; then
	say=‘Good night!’
elif [ $hour > 13 ]; then
	say=‘Good afternoon!’
else
	say=‘Good morning!’
fi

if [ $dayWeek == ‘friday’ ]; then
	good=‘Have a nice weekend!’
elif [ $dayWeek == ‘saturday’ ]; then
	good=‘Have a nice weekend!’
elif [ $dayWeek == ‘Saturday’ ]; then
	good=‘Have a nice weekend!’
elif [ $dayWeek == ‘Friday’ ]; then
	good=‘Have a nice weekend!’
else
	good=‘Have a nice week!’
fi

quote = ‘fortune’

phrase=“$say. Today is $dayWeek, $month $dayMonth, $year. Today quote: $quote.”
echo “$phrase”
espeak “$phrase”
```

Note that Linux Ubuntu bash files are CASE SENSITIVE, then I prefer compare if the day of the week is lower-case or have the first letter capitalized.
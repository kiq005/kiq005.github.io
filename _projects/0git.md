---
title: GitHub
short: git
category: personal
img1: /assets/games/git/tt_1.png
img2: /assets/games/git/tt_2.png
img3: /assets/games/git/tt_3.png
low1: /assets/optm/slide_btn/tt_1.jpg
low2: /assets/optm/slide_btn/tt_2.jpg
low3: /assets/optm/slide_btn/tt_3.jpg
---

Here you can find all my GitHub projects.

<ol class="git">
{% for repository in site.github.public_repositories %}
<li>
	<div class="title"><a href="{{ repository.html_url }}" target="_blank">{{ repository.name }}</a></div>
	{% if repository.stargazers_count > 0 %}<div class="stars">{{ repository.stargazers_count }} <svg width="21" height="21"><path d="m0.95962,8.360446l7.288258,0l2.252122,-6.923808l2.252138,6.923808l7.288243,0l-5.896299,4.279101l2.252234,6.923815l-5.896316,-4.279222l-5.896307,4.279222l2.252241,-6.923815l-5.896312,-4.279101l-0.000001,0z"/></svg></div>{% endif %}
	{% if repository.watchers_count > 0 %}<div class="watchs">{{ repository.watchers_count }} <svg width="21" height="21"><path d="m10.499991,4.729855c-5.644101,0 -10.097474,5.769775 -10.097474,5.769775s4.453373,5.770515 10.097474,5.770515c4.316481,0 10.097491,-5.770515 10.097491,-5.770515s-5.781011,-5.769775 -10.097491,-5.769775zm0,9.365232c-1.981342,0 -3.595446,-1.613357 -3.595446,-3.595456s1.614103,-3.59545 3.595446,-3.59545s3.595445,1.614098 3.595445,3.59545s-1.614095,3.595456 -3.595445,3.595456zm0,-5.694228c-1.158591,0 -2.098775,0.939435 -2.098775,2.098772c0,1.159344 0.939433,2.09878 2.098775,2.09878c1.159338,0 2.098773,-0.939436 2.098773,-2.09878c0,-1.158581 -0.939435,-2.098772 -2.098773,-2.098772z"/></svg></div>{% endif %}
	<div class="size" id="{{ repository.size }}"></div>
	<div class="update">Last Update: {{ repository.updated_at | date: '%B %d, %Y'}}</div>
	{% if repository.description %}<div class="description">
	<div><b>Description:</b></div>
	<div>
		{{ repository.description }}
	</div></div>{% endif %}
	<div class="rep_language"><b>Language: </b> {{ repository.language }} </div>
</li>
{% endfor %}
</ol>

<script>
function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

var kb = document.getElementsByClassName("size");
var i;

for(i=0; i<kb.length; i++){
	var content = document.createTextNode(formatBytes(kb[i].id * 1024));
	kb[i].appendChild(content);
}
</script>
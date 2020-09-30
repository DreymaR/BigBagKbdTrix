# BigBagKbdTricks docs
## DreymaR's Big Bag of Keyboard Tricks - The Web Pages
=======================================================
  
https://dreymar.github.io/BigBagKbdTrix/index.html?version=new
  
https://dreymar.github.io/BigBagKbdTrix/test-page.html?version=new
  
TODO/WIP for DreymaR's Big Bag Of Keyboard Tricks content (Forum & html):
-------------------------------------------------------------------------
- Dictionary: Explain SFB, Curl/Angle/Wide, inward/outward/mixed rolls
- Make Image2 and Image3 posts for the Image topic (topic 111)
	- Image2: Keyboard images. State licencing for SVG (CC) vs others (Public Domain)
	- Image3: Interesting designs, fun, logos, icons, etc
  
TODO/WIP For the BigBag web pages:
----------------------------------
- Include the header code on all pages instead of duplicating code! May have to use JS. Or jQuery.load()?
	- See https://www.w3schools.com/howto/howto_html_include.asp
		- Failed for me. Tried baking it into the main.js.
		- Need to include it as <head and <nav tags, not <div as in the example?!
	- Or https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file (jQuery)
	- https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
	- https://stackoverflow.com/questions/22326742/server-side-includes-alternative
	- I think <body onload="includeHTML()"> would only work for body and not head?
	- W3Schools: document.onload = function() {fn()}; to run fn()
	- https://stackoverflow.com/questions/22326742/server-side-includes-alternative
		- GH-pages use Jekyll; could include as, say, {% include web/inc-navbar.html %}
- Make one res (img and files) folder from the Dropbox Public one, and one web for the page files
	- Put fonts, css and js in the web folder
	- TODO: Update all content image links to res locations
  
DONE
----
- Make a Co browser tab (fav)icon
	- See https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website
  
HTML observations
-----------------
- The gh-pages may not update immediately because of their CDN cache. So it may take up to 10 min for a push to take.
	- To bypass this, request a non-existing version of the page as that'll break the cache:
		- https://dreymar.github.io/BigBagKbdTrix/index.html?version=cachebreak

HTML tips from MarVel95, 2019-09-17:
------------------------------------
```
• https://developer.mozilla.org/ - documentation for everything that has to do with HTML and CSS

• tag=element – the most used tags are:
<p> - paragraph
    <p class="italic">
<a> - link
    <a class="underlined">
<div class="quote">
<b>, <strong> - bold
<em> - italic
<img src="content/images/dk12_dblacutesci.png" class="smallImg"> ('alt' attribute is optional - displays when image cannot be displayed)
    <img class="left"....
ul - unordered list
ol - ordered list (1,2,3/a,b,c)
    <ul class="disc">
    <ul class="circle">

<span> - separates a text so you can style it, for example if you want part of a sentence to be crossed with a line, go
    <span class="linethrough">

• For spoilers:
<div class="spoiler">
    <p><span>Spoiler:</span></p>
    <div class="spoilerBody">
    SPOILER CONTENT HERE
    </div>
</div>

• To display the characters '<' and '>', use &lt; and &gt; so that they're not interpreted as parts of a tag

• For blocks of code use <pre><code>...</code><pre> and remove all indentation(tabs) left of the code in between these tags 
    because the tabs will be shown as these tags format literally every space, tab and new line.
```

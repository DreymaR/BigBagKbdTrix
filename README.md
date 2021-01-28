# BigBagKbdTricks docs
## DreymaR's Big Bag of Keyboard Tricks - The Web Pages
=======================================================
  
https://dreymar.github.io/BigBagKbdTrix/index.html?version=new
  
https://dreymar.github.io/BigBagKbdTrix/test-page.html?version=new
  
TODO/WIP for DreymaR's Big Bag Of Keyboard Tricks content (Forum & html):
-------------------------------------------------------------------------
- Update everything to the new DH standard (formerly DHm) from the old DHk. Images, explanations.
	- 6s & 7s are now resolved as SteveP uses 6-left on staggered boards and 6-right on matrix
- Dictionary: Explain SFB, Curl/Angle/Wide, inward/outward/mixed rolls
- Make Image2 and Image3 posts for the Image topic (topic 111)
	- Image2: Keyboard images. State licencing for SVG (CC) vs others (Public Domain)
	- Image3: Interesting designs, fun, logos, icons, etc
  
TODO/WIP For the BigBag web pages:
----------------------------------
- Implement Jekyll in order to remove duplicating code!
	- Take out header in a separate 'include'
	- Figure out a way to edit some portion of the default.html per page basis - like hightlighting the current page's menu item. Maybe use parameters?
- Implement SASS/LESS for easier reading of the styles code.
- Replace forum links with github pages ones.
- Fix the popup that shows during the first website visit.
- Rework the 'Platforms' menu visualisation.
	- Let it open without delay.
	- Make it smoother so it doesn't glitch/flicker.
	- Make the icons smaller.
	- Implement a sort of a 'Under construction' message for the Mac platform.
- Switch the places of the menu and Platforms icons so that when opening the menu, the icon doesn't have to move all across the screen -> increases animation smoothness.
- Change the style of spoilers so that they're more visible.
- Keep original image sizes.
- Better alignment of images and text around them.
- Additional padding at the bottom of <code> blocks.
- Fix class names
- Make one res (img and files) folder from the Dropbox Public one, and one web for the page files
	- TODO: Put fonts, css and js in the web/content folder
	- TODO: Update all content image links to res locations
	- TODO: Change all res/img links to the old subfolder structure so images are sorted by subject again
  
DONE
----
- Make a Co browser tab (fav)icon
	- See https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website
- Take out everything except the content of the <main> tag into default.html.
  
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

# BigBagKbdTricks docs
## DreymaR's Big Bag of Keyboard Tricks - The Web Pages
=======================================================
  
https://dreymar.colemak.org
  
TODO/WIP for the BigBag Forum & web content:
--------------------------------------------
- Dictionary: Explain SFB, Curl/Angle/Wide, inward/outward/mixed rolls
- Make Image2 and Image3 posts for the Image topic (topic 111)
	- Image2: Keyboard images. State licencing for SVG (CC) vs others (Public Domain)
	- Image3: Interesting designs, fun, logos, icons, etc
  
TODO/WIP For the BigBag web pages:
----------------------------------
- Locale variants:
	- Add more of the Forum locale topic
	- Maybe put the variant stuff in the EPKL repo? That's where often I work with it.
  
- A little more air before headings, in the style sheets? And a style for large text, without air.
- Add the Training Topic. Under Learning? Update its link on the links page; also on Discord.
- In tarmak.html, cannibalize part of the BIG BAG? HALP! section for a main page overview?
	- The rest of the bag is so easily and clearly accessible from the Tarmak page now
	- Also make platform boxes for the Tarmak implementations part
- In extend-layers.html, replace the "Head over to" part with proper platform box tips for Extend
- Make an imgtxt class with italic and a line break after it? For image subtexts. Is that doable?
  
- Implement SASS/LESS for easier reading of the styles code.
- Rework the 'Platforms' menu visualisation.
	- Let it open without delay.
	- Make it smoother so it doesn't glitch/flicker.
	- DONE: Make the icons smaller.
	- Implement a sort of a 'Under construction' message for the Mac platform.
		- Link to the MKBorregaard topic there.
- Better alignment of images and text around them.
- Change font to 'Open Sans' for easier-on-the-eyes reading?
- Additional padding at the bottom of 'code' blocks.
- Fix class names
- Possibly use CSS for the spoilers mechanism and js only for the classes' adding and removing?
- Validate html and css files
- Add link to the git repo?
  
DONE
----
- Flesh out the Monkeytype learning section: Colors, settings tips
- Make bookmark links for page chapters, and add them to the menus. Example: DK mappings; Variants.
- Update all content image links to local res/ locs. Replace Dropbox links with res/. Replace res/img/.
- Add a smaller 'Platforms' menu to every platform-box.
- Make a Co browser tab (fav)icon
	- See https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website
- Implement Jekyll in order to remove duplicating code!
	- Take out everything except the content of the 'main' tag into default.html.
	- Take out header in a separate 'include'
	- Figure out a way to edit some portion of the default.html per page basis
- Switch the places of the menu and Platforms icons so that when opening the menu, the icon doesn't have to move all across the screen -> increases animation smoothness.
- Implement platform boxes at the appropriate places.
- Fix the popup that shows during the first website visit.
- Change the style of spoilers so that they're more visible.
- Smaller logo.
- Keep original image sizes.
  
- Updated everything to the new DH standard (formerly DHm) from the old DHk. Images, explanations.
	- 6s & 7s are now resolved as SteveP uses 6-left on staggered boards and 6-right on matrix
  
HTML observations
-----------------
- The gh-pages may not update immediately because of their CDN cache. So it may take up to 10 min for a push to take.
	- To bypass this, request a non-existing version of the page as that'll break the cache:
		- https://dreymar.github.io/BigBagKbdTrix/index.html?version=cachebreak

HTML tips from abrickinthehallway:
---------------------------------:
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

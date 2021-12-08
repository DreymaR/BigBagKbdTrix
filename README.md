# BigBagKbdTricks docs
## DreymaR's Big Bag of Keyboard Tricks - The Web Pages
=======================================================
<br>

https://dreymar.colemak.org

TODO/WIP for the BigBag Forum & web content, mostly for DreymaR:
----------------------------------------------------------------
- Beginner's FAQ questions:
	- In the front page FAQ section? Many of them are generic Colemak non-BigBag questions, so make a section on www.colemak.org instead?
	☑ Format them as spoilers? With the question as header: 🤔 ❓ "<question>"  ❓
	- "Which is better, Vanilla or DH?"
		- Both have shown 220+ WPM typing test results
		- Individual preference, typing style (float vs grounding)
	- "Is DH the same as... (DHm/DHk, the DH mod for ANSI/ISO vs matrix/ortho...)?"
	☑ "Would DH work without that pesky confusing Angle mod?"
		- "Would using one ortho board and another ANSI Angle-modded board make it more confusing?"
	- "Isn't Workman/Norman better than Colemak (vanilla)? Its documentation says so!"
		- Here's Ben Vallack talking about leaving Workman: https://www.youtube.com/watch?v=WVmJrZF9xwk&t=245s
	- "I want to tweak Colemak a little to suit my needs!"
		- Unless you really are an experienced layout designer, be open to the fact that you probably don't know and understand enough to do it well.
		- On a properly optimized layout it's generally very hard to change even a small thing without breaking something more important.
		- You should understand some central concepts such as finger strengths, interdependences and speeds, as well as the crucial same-finger bigram.
		- Read the https://colemak.com/Design_FAQ and the accompanying https://colemak.com/Design first, to learn more.
	- "Wouldn't it be better to swap R and S on Colemak?"
	- "My right pinky gets tired! And typing `you` is uncomfortable! What's wrong?"
		- Many QWERTY typists hardly use their right hand pinky, as the rare semicolon sits in its home row position and some type P with their ring finger.
		- These typists may need to build up their finger strength a little to type well on Colemak. Pinky fu!  🥋
		- There are layouts that deprioritize the pinkies more than Colemak. These generally aren't so good, however.
		- There are even highly optimized layouts that have heavier pinky load than Colemak.
		- The `you` trigram in particular, isn't so great on Colemak. Trust me, most common n-grams are great.
			- This one has a so-called `redirect`, which means that it changes direction (RL then LR). That's not so comfortable.
			- Furthermore, it uses both the weak pinky and the codependent ring finger. You just have to train it!
	- "Which layouts are better than Colemak?"
		- Depends a lot on modeling and scoring. Individual factors and preferences become important, as with vanilla vs DH.
		- Diminishing returns, infinite layout pool
		- More changes from QWERTY, more keys change hands, fewer shortcuts kept
		- Many layouts claiming superiority have more pinky movement! Also more pinky SFBs even with fewer total SFBs.
		- Colemak places the quite common `A` and `O` on pinkies, but has little pinky movement to the other rows.
		- Word of warning about implementation.
	- How can I get a layout up and running? I downloaded this installer...
		- Four main ways on Windows: MSKLC, AHK, EPKL, Registry/SharpKeys. Strengths and weaknesses.
		- On Linux and MacOS, XKB and KMonad. Differences.
		- Hardware implementation. Programmable board and QUICKIE.
- Locale variants:
	- Add more of the Forum locale topic
	- I now put variant stuff in the EPKL repo, as that's where often I work with it. Link from the BBoT?
- Compose as its own point, instead of just under Extend?!
	- Or, add Compose to the "When" Sequencing section of the Extend page.
	- Contrast Compose to DKs.
		- DKs: Many, harder to reach them, single trigger. Help images in EPKL. Some positions hard to remember.
		- Compose: Often longer sequences, but more mnemonic. Can be kept on main layer.
- Dictionary: Explain SFB, Curl/Angle/Wide, inward/outward/mixed rolls
- Make Image2 and Image3 posts for the Image topic (topic 111)
	- Image2: Keyboard images. State licencing for SVG (CC) vs others (Public Domain)
	- Image3: Interesting designs, fun, logos, icons, etc
- In tarmak.html, cannibalize part of the BIG BAG? HALP! section for a main page overview?
	- The rest of the bag is so easily and clearly accessible from the Tarmak page now
	- Also make platform boxes for the Tarmak implementations part
- In extend-layers.html, replace the "Head over to" part with proper platform box tips for Extend
<br>

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
- Better alignment of images and text around them.
- Change the style of spoilers so that they're more visible.
- Change font to 'Open Sans' for easier-on-the-eyes reading.
- Additional padding at the bottom of 'code' blocks.
- Smaller logo.
- Implement SASS/LESS for easier reading of the styles code.
- Keep original image sizes.
- Fix class names
- Make an imgtxt class with italic and a line break after it? For image subtexts.
- Validate html and css files
- Rework the 'Platforms' menu visualisation.
	- Let it open without delay.
	- Make it smoother so it doesn't glitch/flicker.
	- Make the icons smaller.
	- Implement a sort of a 'Under construction' message for the Mac platform.
		- Link to the MKBorregaard topic there.
- A little more air before headings, in the style sheets? And a style for large text, without air.


- Updated everything to the new DH standard (formerly DHm) from the old DHk. Images, explanations.
	- 6s & 7s are now resolved as SteveP uses 6-left on staggered boards and 6-right on matrix
<br>

HTML observations
-----------------
- The gh-pages may not update immediately because of their CDN cache. So it may take up to 10 min for a push to take.
	- To bypass this, request a non-existing version of the page as that'll break the cache:
		- https://dreymar.github.io/BigBagKbdTrix/index.html?version=cachebreak
<br>

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
<img src="content/images/dk12_dblacutesci.png" class="img-small"> ('alt' attribute is optional - displays when image cannot be displayed)
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
    <div class="spoiler-body">
    SPOILER CONTENT HERE
    </div>
</div>

• To display the characters '<' and '>', use &lt; and &gt; so that they're not interpreted as parts of a tag

• For blocks of code use <pre><code>...</code><pre> and remove all indentation(tabs) left of the code in between these tags 
    because the tabs will be shown as these tags format literally every space, tab and new line.
```

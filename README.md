# BigBagKbdTricks docs
## DreymaR's Big Bag of Keyboard Tricks - The Web Pages
=======================================================
<br>

https://dreymar.colemak.org

TODO/WIP for the BigBag Forum & web content, mostly for DreymaR:
----------------------------------------------------------------
- Link somewhere to SteveP's layout app?
	- https://play.google.com/store/apps/details?id=io.github.colemakmods.keyboard_companion
- Beginner's FAQ questions:
	☑ In the front page FAQ section on www.colemak.org, as most of them are generic Colemak and not BigBag-specific questions.
	☑ Format them as spoilers. With the question as header: 🤔 ❓ "<question>"  ❓. No, drop the trailing ❓ as that'll look messy.
	- LAYOUT DESIGN QUESTIONS
	  -----------------------
	- "Which Colemak is better, Vanilla or Curl/DH?"
		- Both have shown 220+ WPM typing test results
		- Individual preference: 
		- Your typing style may affect your choice a bit (float vs grounding)
		- The even further modded Colemak-CAWS is DH(CA) plus Wide and Sym (WS) mods. See the BigBag.
	- "Is Colemak-DH the same as...?"
		- The DH mod for Colemak is the result of SteveP's Mod-DH project from 2014. As the name says, it moves the D and H keys.
		- It's a Curl mod: It lets the home row curl like the natural curve of fingers on a hand instead of stretching inwards.
		- On a row-staggered board (any standard keyboard has a 1/4–1/2u row stagger) it's accompanied by an Angle mod.
		- The geometrically descriptive name for Colemak-DH is therefore Colemak-CurlAngle or Cmk-CA.
		- There is only one standard variant of Cmk-DH now, although a few have been tried out.
		- Standard Cmk-DH has M on the home row and is also named Cmk-DHm. There's also a Cmk-DHk, the former standard.
		- (DHm/DHk, the DH mod for ANSI/ISO vs matrix/ortho...)?"
	☑ "Why is Z in the middle of the board on Angle-ANSI? Would DH work without that pesky confusing Angle mod?"
		- "Would using one ortho board and another ANSI Angle-modded board make it more confusing?"
	- "Which layouts are better than Colemak?"
		- Depends a lot on modeling and scoring. Individual factors and preferences become important, as with vanilla vs DH.
		- Diminishing returns, infinite layout pool
		- More changes from QWERTY, more keys change hands, fewer shortcuts kept
		- Many layouts claiming superiority have more pinky movement! Also more pinky SFBs even with fewer total SFBs.
		- Colemak places the quite common `A` and `O` on pinkies, but has little pinky movement to the other rows.
		- Word of warning about implementation.
	- "Isn't Workman/Norman/Whatever better than Colemak? Its documentation says so!"
		- Please don't trust any layout maker's own words. There really are a lot of fairly clueless people and even nutcases make layouts.
		- Here's Ben Vallack talking about leaving Workman: https://www.youtube.com/watch?v=WVmJrZF9xwk&t=245s
	- "I want to tweak Colemak a little to suit my needs!"
		- Unless you really are an experienced layout designer, be open to the fact that you probably don't know and understand enough to do it well.
		- On a properly optimized layout it's generally very hard to change even a small thing without breaking something more important.
		- You need to understand concepts such as finger strengths, interdependences and speeds.
		- You need to understand typing concepts such as grounding vs float, hand and finger balances, alternation vs rolls.
		- You probably should understand anatomical concepts such as ulnar deviation, lateral stretches, finger 
		- Same-finger bigrams is a crucial factor in layout design! You may not notice them at first though.
			- Some say that a SFB% of, say, 0.2% for 
			- Beyond simple SFBs you have roll direction and redirects, skip-grams and whatnot. Here be dragons!
		- Read the https://colemak.com/Design_FAQ and the accompanying https://colemak.com/Design first, to learn more.
		- "In the world of layout design there is no beginner's luck, only beginner's mistakes" ~ DreymaR, 2021
	- "Wouldn't it be better to swap R and S on Colemak? It's hard to learn!"
		- We get this one a lot from newcomers! You won't believe how common it is!
		- Funny video comment: https://www.youtube.com/watch?v=4qLkq6jYnJM
		- See the "I want to tweak Colemak..." question first.
		- Simply swapping R and S on Colemak is definitely not recommended! It leads to higher same-finger bigram frequency and other issues.
		- Ease of learning is a design property of Colemak, but should not be so at the cost of too much layout quality.
			- Funnily enough, other layouts move lots of keys between hands and swap them around. Their learners don't complain.
			- Colemak, on the other hand, has this one somewhat hard-to-learn key swap, and lots of learners complain since it's just that one.
		- In the [Colemak Design FAQ](https://colemak.com/Design_FAQ) Shai Coleman answers the R-S exchange question like this:
			- It significantly reduces same-finger. This is especially important as it affects the ring finger which is the least dexterous finger.
				- (e.g. try typing fast WSWSWS on QWERTY)
			- It allows for W to stay in the same place. It's more important to keep the potentially destructive Ctrl+W shortcut.
				- (Close Window under MS Windows)
		- Moving Ctrl+S is far less destructive than moving Ctrl+W.
		- RS occurs 0.40% of the time; common for a bigram. SR occurs 0.006% of the time. It's better to roll this bigram inwards than outwards.
		- The ST bigram too is better this way, and more common than TS.
		- https://www.reddit.com/r/Colemak/comments/hnfk6e/is_there_a_good_reason_for_the_placement_of_r_and/

	- English bigram frequencies from Norvig/Mayzner: https://blogs.sas.com/content/iml/files/2014/09/bigrams.txt
		  ##: Bigram	##: Reverse 	Sum  	Ratio | - Comment
		=======================================================================================================
		- Common bigrams in English:
		  --------------------------------
		  TH: 3.556%	HT: 0.130%  	3.69%	 27   | - TH and HE are the two most common bigrams
		  HE: 3.075%	EH: 0.026%  	3.10%	118   | - HE is also relevant to Colemak-DH
		  ER: 2.048%	RE: 1.854%  	3.90%	  1.1 | - ER/RE is the most common bidirectional bigram
		  OU: 0.870%	UO: 0.011%  	0.88%	 79   | - OU is also relevant to Colemak YOU
		- Relevant to a Colemak R-S swap:
		  --------------------------------
		  ST: 1.053%	TS: 0.337%  	1.39%	  3.1 | - ST/TS is in the top 20 English bigrams
		  RS: 0.397%	SR: 0.006%  	0.40%	 66   | - RS is nicer to roll inwards
		  TR: 0.426%	RT: 0.362%  	0.79%	  1.2 | - TR/RT vs RS/SR isn't so important here?
		  SC: 0.155%	CS: 0.023%  	0.18%	  6.7 | - Colemak has SC/CS, WR/RW, SF/FS relevant SFBs
		  WR: 0.031%	RW: 0.013%  	0.04%	  2.4 |     - In sum, 0.24% relevant SFBs
		  SF: 0.017%	FS: 0.006%  	0.02%	  2.8 |     - Cmk total is 1.67% on the Colemakmods analyzer
		  CR: 0.149%	RC: 0.121%  	0.27%	  1.2 | - R-S swapped Cmk has CR/RC, FR/RF, WS/SW SFBs
		  FR: 0.213%	RF: 0.032%  	0.25%	  6.6 |     - In sum, 0.58% relevant SFBs
		  WS: 0.035%	SW: 0.024%  	0.06%	  1.5 |     - That's a factor 2.4 over Cmk's
		- The most frequent Colemak SFBs:
		  --------------------------------
		  SC: 0.155%	CS: 0.023%  	0.18%	  6.7 | - E, KN UE SC Y. are the most common SFBs on Colemak
		  UE: 0.147%	EU: 0.031%  	0.18%	  4.7 | - UE feels easier as an upper-to-middle-row SFB
		  NK: 0.052%	KN: 0.051%  	0.10%	  1.0 | - NK/KN is easily alt-fingered with index-middle fingers
		
	- SteveP's SFB analysis using the colemakmods analyzer:
			Colemak                     	1.669%
			Colemak (angle-cheat)       	1.789%
			Colemak-RS                  	2.034%
			Colemak-RS (angle-cheat)    	2.044% 
		- So the difference is bigger than 0.24% in this analysis
			- is that due to the difference between Norvig/Mayzner and the carpalx (which I use) datasets?
		- I've always thought that if people are determined to swap RS, then they should do a FL swap as well:
			Colemak-RSFL                	1.872%
			Colemak-RSFL (angle-cheat)  	1.763% (Improves hand balance too!)

	- PRACTICAL QUESTIONS
	  -------------------
	- "My right pinky gets tired! And typing `you` is uncomfortable! What's wrong?"
		- Many QWERTY typists hardly use their right hand pinky, as the rare semicolon sits in its home row position and some type P with their ring finger.
		- These typists may need to build up their finger strength a little to type well on Colemak. Pinky fu!  🥋
		- There are layouts that deprioritize the pinkies more than Colemak. These generally aren't so good, however.
		- There are several highly optimized layouts that have a heavier pinky load than Colemak.
		- The `you` trigram in particular, isn't so great on Colemak. Trust me, most common n-grams are great. 👍
			- This one has a so-called `redirect`, which means that it changes direction (RL then LR). That's not so comfortable.
			- Furthermore, it uses both the weak pinky and the codependent ring finger. You just have to train it!
	- "How can I train my fingers to get better at typing for instance `you`, then?"
			- At the Training page there are tips for training hard n-grams. Try a list of words containing 'ou uo yo oy uy yu'!
			- If you have a programmable keyboard you could make a chord for hard n-grams. E.g., press 'yu' at the same time for 'you'.
	- How can I get a layout up and running? I downloaded this installer...
		- Four main ways on Windows: MSKLC, AHK, EPKL, Registry/SharpKeys. Strengths and weaknesses.
		- On Linux and MacOS, XKB and KMonad (and the mostly deprecated xmodmap). Differences.
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

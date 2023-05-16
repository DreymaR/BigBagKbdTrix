# BigBagKbdTricks docs

DreymaR's Big Bag of Keyboard Tricks - The Web Pages
====================================================

Web pages for [dreymar.colemak.org](https://dreymar.colemak.org)
----------------------------------------------------------------


TODO/WIP for the BigBag Forum & web content, mostly for DreymaR:
----------------------------------------------------------------
- Some still find platform selection non-intuitive. Hmmm...
	- Could we link to a specific platform box? As in `page.html#anchor?platform=win`.
	- Make it so that clicking the text `PLATFORMS` shows the how-to screen again (only seen initially now).

- Platform box for Sequencing? And Modifiers?
	- Colemak-eD too?
	- Tarmak `DOWNLOADS` definitely should be boxed.

- Link somewhere to SteveP's layout app?
	- https://play.google.com/store/apps/details?id=io.github.colemakmods.keyboard_companion

- Link to the Getreuer writeup on alt layouts? It's a nice read.
	- https://getreuer.info/posts/keyboards/alt-layouts/index.html

- Locale variants:
	- Add more of the Forum locale topic
	- I now put variant stuff in the EPKL repo, as that's where often I work with it. Link from the BBoT?
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
<br>


DONE
----
- More consistent page and anchor naming
	- A link like layers-extend.html#section-name is easier to use as you don't need to check the source code for it.
- More consistent file naming
	- `training > learning-training` too? At least, `tarmak-intro > learning-tarmak` and `tarmak > tarmak-steps`?
	- May be unwise to change page names too often, though? I may have links lying around in places where I don't think enough about them.
- More FAQ's so there's one for nearly everything
	☑ Format them as spoilers. With the question as header: 🤔 ❓ "<question>".
	- See the https://www.colemak.org README for some generic Colemak beginner questions and answers
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


HTML tips from aBrickInTheHallway
---------------------------------
```
• https://developer.mozilla.org/ - documentation for everything that has to do with HTML and CSS

• tag=element – the most used tags are:
<p> - paragraph
    <p class="italic">
<a href="https://your.url"> - link
    <a class="underlined">
<div class="quote">
<b>, <strong>   - bold
<i>, <em>       - italic
<img src="content/images/img.png" class="img-small"> ('alt' attribute is optional - displays when image cannot be displayed)
    <img class="left"....
ul - unordered list
ol - ordered list (1,2,3/a,b,c)
    <ul class="disc">
    <ul class="circle">

<span> - separates a text so you can style it, for example if you want part of a sentence to be crossed with a line, go
    <span class="linethrough">

• <!-- comment -->

• Spoiler template:
<div class="spoiler">
    <p><span>Spoiler:</span></p>
    <div class="spoiler-body">
        SPOILER CONTENT HERE
    </div>
</div>

• Platform box template:
<div class="platform-content">
    <p>
        
    </p><p>
        
    </p>
</div>

• To display the characters '<' and '>', use &lt; and &gt; so that they're not interpreted as parts of a tag

• For blocks of code use <pre><code>...</code><pre> and remove all indentation(tabs) left of the code in between these tags 
    because the tabs will be shown as these tags format literally every space, tab and new line.
```


Jekyll and Ruby for GitHub pages
--------------------------------
[Note: This is a copy of my Evernote document "Jekyll and Ruby"]

Check Linux (Ubuntu), Ruby and Jekyll versions:
```
lsb_release -a
jekyll -v && ruby -v
```
As of 2023-02, GitHub pages have these dependencies: Jekyll 3.9.3; Ruby 2.7.4
https://pages.github.com/versions/

Install Jekyll with Ruby on Windows WSL Bash using the Brightbox repo, Gem and Bundler:
```
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-add-repository ppa:brightbox/ruby-ng && sudo apt-get update
sudo apt-get install ruby2.7 ruby2.7-dev build-essential dh-autoreconf

echo 'export GEM_HOME=$HOME/gems/' >> ~/.bashrc && echo 'export PATH="$PATH:$HOME/gems/bin"' >> ~/.bashrc
source ~/.bashrc

gem update && gem install jekyll bundler && bundler update
```
• WSL can be a little stupid as to which Ruby version it uses, so it may be best to be specific as above.
• Using `apt-get install bundler` on WSL installed an outdated Ruby version (1.9.1) so I guess I shouldn't do that!
• Turns out it was because the WSL Ubuntu hadn't been updated in ages.

To avoid permission errors on the gem commands (write permission for /var/lib/gems/2.6.0/):
Using sudo gem seems to work but isn't recommended! Instead, add this to your ~/.bashrc file, as shown above:
```
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```

Now, go to the web root folder in the BigBagKbdTrix repo (not repo root but docs!) and build with Jekyll:
```
source ~/.bashrc
jekyll build
jekyll serve --watch
```

• I didn't need `bundle exec` in front of the jekyll commands.
• At a later point, there was a version mismatch between the Gemfile (with GitHub Pages settings) and local installs.
• When that happened, using `bundle exec jekyll` etc worked.

When you see 'Server running...', you should be able to browse the site locally on 127.0.0.1:
http://localhost:4000/

Word has it, GitHub Pages don't support Jekyll v4+? So edit your Gemfile for realistic local builds:
```
# This will help ensure the proper Jekyll version is running. 
# gem "jekyll", "~> 4.2.0" 
...
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and 
# uncomment the line below. To upgrade, run `bundle update github-pages`. 
gem "github-pages", group: :jekyll_plugins
```
GitHub Pages don't use either Gemfile nor Gemfile.lock, but their own Jekyll settings. So these files are relevant for local builds only.
```
gem install github-pages
```
"A simple Ruby Gem to bootstrap dependencies for setting up and maintaining a local Jekyll environment in sync with GitHub Pages". Sounds useful. I couldn't install it because of some `incompatible library` error, though...

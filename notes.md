# Notes

## General
- Nice **jekyll example site**: https://amor.cms.hu-berlin.de/~jaeschkr/#

## Local
- **Run local jekyll site:** bundle exec jekyll serve

## Formatting
- Find and replace all **fonts in css**: regex search and replace with font-family:(?:.*);
- Change **spacing between menu items**: change 'margin-right' in nav ul li, footer ul li {
- **Font awesome** & **Academicons** inclusion in website:
	- Start: https://fontawesome.com/start or https://jpswalsh.github.io/academicons/ 
	- Look for icons: https://fontawesome.com/icons/ 
		- **Font Awesome**: Include href link, around icon: <a href="http://....." target="_blank">ICON <i> LINK </a>
		- **Academicons**: 
		
## How To's
- Include dynamic iframe: http://seankross.com/2016/11/17/How-to-Start-a-Bookdown-Book.html

## Jekyll Plugins
- Jekyll plugins overview: https://github.com/planetjekyll/awesome-jekyll-plugins

- **In-site citations**: see http://weinan.io/2017/03/06/using-papers-and-manuscripts-to-do-correct-citation.html
- Atom feed inclusion: https://github.com/jekyll/jekyll-feed
	- OK
- Jekyll-planet (Planet Pluto) to included other RSSs in blog: https://github.com/feedreader/jekyll-planet
	- Usage (steps)
		- include/edit pluto.ini
		- bash: 'gem install pluto' to install
		- bash: **pluto update planet.ini** [original: pluto build planet.ini]
		- create blogposts: **ruby -r 'jekyll/planet' -e 'JekyllPlanet.main'**
	- Note on how to assign automatic tags to websites:
		1. input tag name in website title in 'planet.ini'
		2. add `tags:       [#{item.title}]` to line 52 of `tool.rb` in `/Users/florian/.rvm/gems/ruby-2.6.0/gems/jekyll-planet-0.2.1/lib/jekyll/planet/tool.rb` [=DONE]
- Tagging: according to https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/
	- Tag categories:
		- website: posts related to website
		- rss-repost: interesting blogposts from the internet (t-rss feed)
		- *twitter: twitter posts
		- *input-output:
		
		
- Find out where gems are installed (ruby): `gem environment`
		
## Update and maintenance
- Gem (Ruby)
	- Update gem : 'gem update --system'
	- Update gems: 'bundle update --all' --> updates all gems in gemfile
		
# Loader.js
This is the plugin I wrote on my free time to manage pages on my website (mspry.net), I've put it here for a couple of reasons, firstly so anyone can look over and/or learn from it and secondly because Windows Bootcamp sucks and corrupted my OS X partition after updating to 8.1 resulting in losing everything on my hard drive, luckily I was able to pull it from my web server and will be keeping it on my bitbucket from now on for safe keeping.

# What is this?
Loader.js (index-loader.js) is a jQuery plugin that dynamically loads content into the page window, but also has the functionality to load into specific pages using a Hash in the URL (Example: http://www.mspry.net/#Loader.js)

# How does this Work?
The script is added to the index and then by using a custom HTML attribute "loader_link" or the Hash added to the end of the URL, the script checks the "pages" folder in the same directory as the index and if it finds a match it will load the contents into the index. If the script fails to find the requested link it redirects the user to a 404 page.

# www.mspry.net
My website runs this script, you can see an example of how it works by clicking any of the links in the navigation menu on the site.
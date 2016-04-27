# What is Loader.JS?
Loader.js (index-loader.js) is a jQuery plugin that dynamically loads content into the page window, but also has the functionality to load into specific pages using a Hash in the URL (Example: http://www.mspry.net/projects/LoaderJS)

# How does this Work?
The script is added to the index and then by using a custom HTML attribute "loader_link" or the Hash added to the end of the URL, the script checks the "pages" folder in the same directory as the index and if it finds a match it will load the contents into the index. If the script fails to find the requested link it redirects the user to a 404 page.

# Final Notes
I would recommend combining this script with PHP so it reads the directory and automatically adds it to the navigation, however since the idea was designed to be flat file with no Databases or server assistance you could just keep a static list of the URLs, or potentially use jQuery to pull in the data from a file file too via ajax. Also heads up, the original HTML was written by me many years ago so it looks and feels very dated.
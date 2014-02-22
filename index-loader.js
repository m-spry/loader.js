//Default Variables
var link_error = 'pages/Error/index.php'; //Always send here when we get a 404 error
var link_title; // Prevents Errors
//Load via Hash Variables
var HashCheck = document.location.hash; //Get the hash
var Hash = HashCheck.slice(1); //Remove the hash
$(document).ready(function() {
	if(Hash != "") {
		$.ajax({
		  url: '/pages/'+Hash+'/index.php',
		  cache: false,
		  statusCode: {
		    404: function() {
				$.ajax({
					url: link_error,
					cache: false
				}).done(function(data){
					$('#index-container').slideDown("1").html(data);
					document.title = 'Madison Spry - Error';
					document.location.hash = "Error";
				});
			}
		  }
		}).done(function(data) {
		    $('#index-container').slideDown("1").html(data);
			document.title = 'Madison Spry - '+Hash;
			if (link_title == 'Home') {
				document.location.hash = "";
			} else {
				document.location.hash = Hash;
			}
		});
	}
});
$(function loader () {
    $('a[loader_link]').on("click", function (e) {
        e.preventDefault(); //Prevent default click
        // loader() Variables
        var link_title = $(this).attr('loader_link'); // Uses a custom attribute to do all our work.
        var link_feedback = 'pages/'+ link_title + '/index.php';
		$('#index-container').fadeOut("1000", function(){
			$.ajax({
			  url: link_feedback,
			  cache: false,
			  statusCode: {
			    404: function() {
					$.ajax({
						url: link_error,
						cache: false
					}).done(function(data){
						$('#index-container').slideDown("1").html(data);
						document.title = 'Madison Spry - Error';
						document.location.hash = "Error";
						loader(); //Rerun the script again, prevents default from taking over.
					});
				}
			  }
			}).done(function(data) {
			    $('#index-container').slideDown("1").html(data);
				document.title = 'Madison Spry - '+ link_title;
				if (link_title == 'Home') {
					document.location.hash = "";
				} else {
					document.location.hash = link_title;
				}
				loader(); // Rerun the script again, prevents default from taking over.
			});
	    });
	});
});
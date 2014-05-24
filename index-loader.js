//Default Variables
var link_error = 'pages/Error/index.php'; //Always send here when we get a 404 error
var link_title; // Prevents Errors
//Load via Hash Variables
var HashCheck = document.location.hash; //Get the hash
var Hash = HashCheck.slice(1); //Remove the hash
$(document).ready(function() {
//Fade in content on load
$('#index-container').hide().slideDown(500);
//Navigation / Home Hider
	$('.logo').on("click", function (e) {
		e.preventDefault(); //Prevent default click
		$('#nav').slideUp(500);	
	});	
//Hash Loader
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
					$('#index-container').slideDown(500).html(data);
					$('#nav').slideDown(500);
					document.title = 'Madison Spry - Error';
					document.location.hash = "Error";
				});
			}
		  }
		}).done(function(data) {
		    $('#index-container').slideDown().html(data);
			$('#nav').slideDown(500);
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
		$('#index-container, #foot').fadeOut(600, function(){
			$.ajax({
			  url: link_feedback,
			  cache: false,
			  statusCode: {
			    404: function() {
					$.ajax({
						url: link_error,
						cache: false
					}).done(function(data){
						$('#index-container').slideDown("500").html(data);
						$('#foot').fadeIn(2000);
						document.title = 'Madison Spry - Error';
						document.location.hash = "Error";
						loader(); //Rerun the script again, prevents default from taking over.
					});
				}
			  }
			}).done(function(data) {
			    $('#index-container').slideDown("500").html(data);
				$('#foot').fadeIn(2000);
				document.title = 'Madison Spry - '+ link_title;
				if (link_title == 'Home') {
					document.location.hash = "";
				} else {
					document.location.hash = link_title;
						$('#nav').slideDown(500);
				}
				loader(); // Rerun the script again, prevents default from taking over.
			});
	    });
	});
});

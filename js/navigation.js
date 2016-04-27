$(document).ready(function(){
	$(".NaviMenu").on({
		click: function() {
			if($(this).hasClass("clicked")) {
		    	$(this).css("backgroundColor","#565656");
		    	$(this).css("height","auto");
		   		$(this).removeClass("clicked");
			} else {
				$(this).css("backgroundColor","");
		   		$(this).css("height","36px");
		   		$(this).addClass("clicked");
			}
		}, mouseenter: function() {
		    $(this).css("backgroundColor","#565656");
		    $(this).css("height","auto");
		}, mouseleave: function() {
		    $(this).css("backgroundColor","");
		    $(this).css("height","36px");
		}
	});
});
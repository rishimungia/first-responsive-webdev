$(document).ready(function(){
	
	var $activePage = ".q-set1";
	var $activeID = "#p1";
	$(".q-set2, .q-set3, .q-set4, .q-set5, .q-set6").hide();

	// page 1
	$("#p1").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set1"
  		$(".q-set1").show();
		
		$activeID = "#p1"
		$("#p1").addClass("active");
	});
	
	// page 2
	$("#p2").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set2"
  		$(".q-set2").show();
		
		$activeID = "#p2"
		$("#p2").addClass("active");
	});
	
	// page 3
	$("#p3").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set3"
  		$(".q-set3").show();
		
		$activeID = "#p3"
		$("#p3").addClass("active");
	});
	
	// page 4
	$("#p4").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set4"
  		$(".q-set4").show();
		
		$activeID = "#p4"
		$("#p4").addClass("active");
	});
	
	// page 5
	$("#p5").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set5"
  		$(".q-set5").show();
		
		$activeID = "#p5"
		$("#p5").addClass("active");
	});
	
	// page 6
	$("#p6").click(function(){
		$($activePage).hide();
		$($activeID).removeClass("active");
		
		$activePage = ".q-set6"
  		$(".q-set6").show();
		
		$activeID = "#p6"
		$("#p6").addClass("active");
	});

});

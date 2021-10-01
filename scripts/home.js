$(document).ready(function(){

	// :: -- Graph code -- :: //
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
    	// The type of chart we want to create
    	type: 'line',

    	// The data for our dataset
    	data: {
        	labels: [1, 2, 3, 4, 5, 6, 7],
		backgroundColor: "rgba(0,0,0,0)",
        	datasets: [{
            	borderColor: 'rgb(255, 99, 132)',
            	data: [10, 20, 15, 25, 35, 30, 45]
       		}]
    	},

    	// Configuration options go here
    	options: {
		maintainAspectRatio: false,
		responsive: true,
		legend: {display: false},
		elements: {point:{radius: 0}},
		scales: {
        		xAxes: [{
				ticks: {display: false},
            			gridLines: {display: false, color: '#fff'}
        		}],
        		yAxes: [{
				ticks: {display: false},
            			gridLines: {display: false, color: '#fff'}   
        		}]
    		}
	}
	});
	
	// :: -- Snap scroll :: -- //
	$(function(){
  		$(".plank").SnapScroll();
	});
});

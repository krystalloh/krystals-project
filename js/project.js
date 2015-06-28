$(function(){

setTimeout(function(){

$('#logo').fadeIn({
	queue: false, 
	duration: 2000
});

$('#logo').animate({ 
	left: "30px" }, 1000
	);

$('#navbar').fadeIn({queue: false, duration: 2000});
$('#navbar').animate({ right: "10px" }, 1000);

3000 }); // setTIMEOUT END


}); // END DOCUMENT.READY
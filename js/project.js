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

//FLICKR PHOTOSET

var apiKey = '0d5486f9e206f51751c1994df4f4c7cd',
	graphics_id = '72157652951691994',
	flickr = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+apiKey+'&photoset_id='+graphics_id+'&format=json&jsoncallback=?';

	$.getJSON(flickr, function(response){
        // console.log(response);

        $.each(response.photoset.photo, function(i, photoInfo){

            var images  = '<a class="fancybox" rel="group" href="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'.jpg"><img src="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'_m.jpg"></a>';
            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            $('.col-12').append(images);    
        });

        $(".fancybox").fancybox();
        
 //        $('.col-12').packery({
 //  			itemSelector: '.fancybox',
 //  			gutter: 50
	// });
   


   });// End of the click 


    

}); // END DOCUMENT.READY
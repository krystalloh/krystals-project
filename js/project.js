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

//FLICKR PHOTOSET - GRAPHICS_BOX

var apiKey = '0d5486f9e206f51751c1994df4f4c7cd',
	graphics_id = '72157652951691994',
    prints_id = '72157652961121283',
    illu_id = '72157652982394444',
	flickr_graphics = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+apiKey+'&photoset_id='+graphics_id+'&format=json&jsoncallback=?',
    flickr_prints = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+apiKey+'&photoset_id='+prints_id+'&format=json&jsoncallback=?',
    flickr_illu = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+apiKey+'&photoset_id='+illu_id+'&format=json&jsoncallback=?';

	$.getJSON(flickr_graphics, function(response){
        // console.log(response);

        $.each(response.photoset.photo, function(i, photoInfo){

            var images  = '<a class="fancybox" rel="group" href="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'.jpg"><img src="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'_m.jpg"></a>';
            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            $('.graphics_box').append(images);    
        });

        $(".graphics_box").fancybox();


   });// End of GRAPHICS_BOX


    //START ILLU
$.getJSON(flickr_illu, function(response){
        // console.log(response);

        $.each(response.photoset.photo, function(i, photoInfo){

            var images  = '<a class="fancybox" rel="group" href="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'.jpg"><img src="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'_m.jpg"></a>';
            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            $('.illu_box').append(images);    
        });

        // $(".illu_box").fancybox();


   });// End of ILLU_BOX

$.getJSON(flickr_prints, function(response){
        // console.log(response);

        $.each(response.photoset.photo, function(i, photoInfo){

            var images  = '<a class="fancybox" rel="group" href="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'.jpg"><img src="http://farm'+photoInfo.farm+'.staticflickr.com/'+photoInfo.server+'/'+photoInfo.id+'_'+photoInfo.secret+'_m.jpg"></a>';
            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
            $('.prints_box').append(images);    
        });

        // $(".prints_box").fancybox();


   });// End of ILLU_BOX



    

}); // END DOCUMENT.READY
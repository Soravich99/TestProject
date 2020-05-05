$(document).ready(function(){
  $('.home-slider').bxSlider({
  	mode     : 'fade',
  	controls : false,
  	auto     : true,
  	pause    : 5000,
  	speed    : 1000
  });
  $('.hot-news').bxSlider({
  	controls : false,
  	auto     : true,
  	pause    : 5000,
  	speed    : 1000
  });


  $('.sub-menu-item a').on('mouseenter', function(){
  	var image = $(this).data('image');
  	if(image != ""){
  		$('#menuCoverImage').prop('src', image);
  	}
  });
  $('.nav-departments').on({
  	mouseenter: function(){
  		$('.main-menu-wrap').addClass('department-hover');
  	}
  });
  $('.main-menu-wrap').on({
  	mouseleave: function(){
  		$('.main-menu-wrap').removeClass('department-hover');
  	}
  });


  $('.floating-menu > div').on({
    mouseenter: function(){
      $(this).addClass('state-hover');
    },
    mouseleave: function(){
      $(this).removeClass('state-hover');
    }
  });


  $('.room-item-list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    controls : true,
    pager: false,
    auto     : false,
    slideWidth: 150,
  });
});
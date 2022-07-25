$(document).ready(function(){

	$('#btn1').click(function(){
		$('.display').addClass('active')
	})
	$('#btn2').click(function(){
		$('.display').addClass('active2')
	})
	$('#btn3').click(function(){
		$('.display').addClass('active3')
	})




	$("#scroll").click(function(e){
		e.preventDefault();
		// $("html").animate({scrollTop:300},1000)
		$("html").animate({scrollTop:$(".me").offset().top},1000);
		// $("header").addClass("scroll")
		

	})


		$(window).scroll(function(){
			var window_scroll = $(window).scrollTop()
			if(window_scroll>600)
			$('header').addClass('active5')
			else{
				$('header').removeClass('active5')
			}


		
	}) 
		particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#888"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#888",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed":12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });



    $('#nav').onePageNav({
      currentClass: 'active',
    });
    
    $("#btn_one").click(function(){
    $(".hidden_section_one").fadeIn(200);

  })
  $("#h3_one").click(function(){
    $(".hidden_section_one").fadeIn(200);

  })
  $(".hidden_section_one span").click(function(){
    $(".hidden_section_one").fadeOut(200);
  })


  $("#btn_two").click(function(){
    $(".hidden_section_two").fadeIn(200);

  })
  $("#h3_two").click(function(){
    $(".hidden_section_two").fadeIn(200);

  })
  $(".hidden_section_two span").click(function(){
    $(".hidden_section_two").fadeOut(200);
  })


  $("#btn_three").click(function(){
    $(".hidden_section_three").fadeIn(200);

  })
  $("#h3_three").click(function(){
    $(".hidden_section_three").fadeIn(200);

  })
  $(".hidden_section_three span").click(function(){
    $(".hidden_section_three").fadeOut(200);
  }) 
  // 3-rd sectionis scroll@ chi ashxatum


  
  $(window).scroll(function(){
    
    if($(window).scrollTop()+200>$(".container_two").offset().top){
      $("header").addClass("scroll")
    }
    else{
      $("header").removeClass("scroll")
    }
  }) 

    $('.main-iso').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
  $('.iso-nav ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.main-iso').isotope({
    filter: selector
  });
  return false;
});
})

    
  
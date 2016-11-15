

	$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});

		$('#contact-us').submit(function(event) {

			console.log("submited!!!")

			var form_data = {}

			form_data.name = $('#name').val()
			form_data.email = $('#email').val()
			form_data.subject = $('#subject').val()
			form_data.message = $('#message').val()

			$.ajax({
				url: 'http://mis412.davidrichard.com/contact_form',
				type: 'POST',
				dataType: 'json',
				data: form_data,
			})
			.done(function(response) {

				console.log("success");
				console.log(response.payload);

				$('#thank-you-message').html(response.message);

				$('.contact-form').hide();
				$('.thank-you').show();
			})
			.fail(function() {
				console.log("error");
			});			

			event.preventDefault();

		});

	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
			}
			else{
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });

        //   $(function() {
        //     $( "#datepicker" ).datepicker();
        // });
    
    };

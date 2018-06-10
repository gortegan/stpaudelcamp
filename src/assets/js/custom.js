// custom settings for js file LeeFreelancer
function init() {

    $(document).ready(function() {

        var $portfolio;
        "use strict";
        /* -------------------------------------------------------- */
        // PreLoader - start
        /* -------------------------------------------------------- */
        // Initialize functions after elements are loaded.
        $(window).on('load', function() {
            // Preloader
            $('.preloader img').fadeOut(); // will first fade out
            $('.preloader').delay(320).fadeOut('slow', function() {

            });
        });
        /* -------------------------------------------------------- */
        // PreLoader - end
        /* -------------------------------------------------------- */

        /* -------------------------------------------------------- */
        // Init menu - start
        /* -------------------------------------------------------- */
        $(this)
            .parents('div.navbar-collapse')
            .removeClass('in');
        $('.onepage-nav')
            .onePageNav({
                scrollSpeed: 649,
                scrollThreshold: 0.3,
                scrollOffset: 69,
                currentClass: 'active',
            });
        setTimeout(function() {
            $(window).scroll();
        }, 500);
        /* -------------------------------------------------------- */
        // Init menu - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Parallax Settings - start
        /* -------------------------------------------------------- */
        //hero image
        $('.setting-parallax').each(function() {
            if ($(this).children('.img-parallax-bg').length) {
                var imgSrc = $(this).children('.img-parallax-bg').attr('src');
                $(this).css('background', 'url("' + imgSrc + '")');
                $(this).children('.img-parallax-bg').remove();
                $(this).css('background-position', '50% 0%');
            }
        });
        var IsParallaxGenerated = false;

        function SetParallax() {
            if ($(window).width() > 1030 && !IsParallaxGenerated) {
                $('.img-parallax').parallax("50%", 0.1);
                IsParallaxGenerated = true;
            }
        }
        /* -------------------------------------------------------- */
        // Parallax Settings - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Full Screen Header - start
        /* -------------------------------------------------------- */
        $(window).on('resize', function() {
            SetResizeContent();
            setTimeout(function() {}, 1000);
        });

        function SetResizeContent() {
            var minheight = $(window).height() / 1.5;
            $(".screen-resize").css('min-height', minheight);
            var minwidth = $(window).width();
            $(".screen-resize-width").css('min-width', minwidth);
        }
        SetResizeContent();
        /* -------------------------------------------------------- */
        // Full Screen Header - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Wow animation - start
        /* -------------------------------------------------------- */
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 90,
            mobile: false,
            live: true
        });
        wow.init();
        /* -------------------------------------------------------- */
        // Wow animation - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Testimonials - start
        /* -------------------------------------------------------- */
        $(".owl-testimonial").owlCarousel({
            navigation: false,
            slideSpeed: 300, // carousel speed
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        /* -------------------------------------------------------- */
        // Testimonials - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Internal Links  - Start
        /* -------------------------------------------------------- */
        $('.internal-link').smoothScroll({
            speed: 700,
            offset: -0
        });
        /* -------------------------------------------------------- */
        // Internal Links  - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Portfolio - start
        /* -------------------------------------------------------- */
        $portfolio_filter = $('.grid');
        $portfolio_filter.imagesLoaded(function() {
            $portfolio_filter.isotope({
                itemSelector: 'li',
                layoutMode: 'masonry'
            });
        });
        $grid_selectors = $('.img-filter > li > a');
        $grid_selectors.on('click', function() {
            $grid_selectors.parent().removeClass('active');
            $(this).parent().addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio_filter.isotope({ filter: selector });
            return false;
        });
        $(window).resize(function() {
            setTimeout(function() {
                $portfolio_filter.isotope('layout');
            }, 500);
        });
        /* -------------------------------------------------------- */
        // Portfolio - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Scroll to top - start
        /* -------------------------------------------------------- */
        $(window).scroll(function() {
            if ($(this)
                .scrollTop() > 100) {
                $('.topScroll')
                    .fadeIn();
            } else {
                $('.topScroll')
                    .fadeOut();
            }
        });
        $('.topScroll').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
        /* -------------------------------------------------------- */
        // Scroll to top - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Counter - starts
        /* -------------------------------------------------------- */
        animatecounters();
        // count starts while scrolling
        $('.counter-settings').appear();
        $(document.body).on('appear', '.counter-settings', function(e) {
            if (!$(this).hasClass('appear')) {
                animatecounters();
                $(this).addClass('appear');
            }
        });

        function animatecounters() {
            $('.counter-settings').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        }
        /* -------------------------------------------------------- */
        // Counter -  ends
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Side Navigation - start
        /* -------------------------------------------------------- */
        $(window).scroll();
        $(window).scroll(function() {
            if ($(window)
                .scrollTop() > 10) {
                $('nav')
                    .addClass('shrink');
            } else {
                $('nav')
                    .removeClass('shrink');
            }
        });
        $('ul.navbar-nav li a')
            .on('click', function(e) {
                $(this)
                    .parents('div.navbar-collapse')
                    .removeClass('in');
                $('.onepage-nav')
                    .onePageNav({
                        scrollSpeed: 649,
                        scrollThreshold: 0.3,
                        scrollOffset: 69,
                        currentClass: 'active',
                    });
                setTimeout(function() {
                    $(window).scroll();
                }, 500);
            });
        /* -------------------------------------------------------- */
        // Side Navigation - end
        /* -------------------------------------------------------- */


        /* -------------------------------------------------------- */
        // Contact Form - start
        /* -------------------------------------------------------- */
        $("#alert").hide();
        $("#btn-contact").on('click', function() {
            var error = validationContactUsForm();
            if (error) {
                $.ajax({
                    type: "POST",
                    url: "contact.php",
                    data: $("#contactusform").serialize(),

                    success: function(result) {
                        $('input[type=text],textarea').each(function() {
                            $(this).val('');
                        })

                        $("#alert").html(result);

                        $("#alert").fadeIn("slow");

                        $('#alert').delay(3000).fadeOut("slow");
                    }
                });
            }
        });

        function validationContactUsForm() {
            var error = true;
            $('#contactusform input[type=text]').each(function(index) {

                if (index == 1) {
                    if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                        $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #e40000" });
                        error = false;

                    } else {
                        $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #e8e8e8" });
                    }
                } else if (index == 0) {
                    if ($(this).val() == null || $(this).val() == "") {
                        $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #e40000" });
                        error = false;
                    } else {
                        $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #e8e8e8" });
                    }
                }
            });
            return error;
        }
    });
    /* -------------------------------------------------------- */
    // Contact Form - end
    /* -------------------------------------------------------- */
}
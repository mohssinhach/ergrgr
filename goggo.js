 <script type="text/javascript" id="masvideos-playlist-tv-show-js-extra">
        /* <![CDATA[ */
        var masvideos_playlist_tv_show_params = {
            "ajax_url": "\/main\/wp-admin\/admin-ajax.php",
            "masvideos_ajax_url": "\/main\/?masvideos-ajax=%%endpoint%%"
        };
        /* ]]> */
    </script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/frontend/playlist-tv-show.min.js?ver=1.2.8" id="masvideos-playlist-tv-show-js"></script>
    <script type="text/javascript" id="masvideos-playlist-video-js-extra">
        /* <![CDATA[ */
        var masvideos_playlist_video_params = {
            "ajax_url": "\/main\/wp-admin\/admin-ajax.php",
            "masvideos_ajax_url": "\/main\/?masvideos-ajax=%%endpoint%%"
        };
        /* ]]> */
    </script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/frontend/playlist-video.min.js?ver=1.2.8" id="masvideos-playlist-video-js"></script>
    <script type="text/javascript" id="masvideos-playlist-movie-js-extra">
        /* <![CDATA[ */
        var masvideos_playlist_movie_params = {
            "ajax_url": "\/main\/wp-admin\/admin-ajax.php",
            "masvideos_ajax_url": "\/main\/?masvideos-ajax=%%endpoint%%"
        };
        /* ]]> */
    </script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/frontend/playlist-movie.min.js?ver=1.2.8" id="masvideos-playlist-movie-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/frontend/gallery-flip.min.js?ver=1.2.8" id="masvideos-gallery-flip-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1" id="photoswipe-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/masvideos/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1" id="photoswipe-ui-default-js"></script>
    <script type="text/javascript" id="wp_ulike-js-extra">
        /* <![CDATA[ */
        var wp_ulike_params = {
            "ajax_url": "https:\/\/vodi.madrasthemes.com\/main\/wp-admin\/admin-ajax.php",
            "notifications": "1"
        };
        /* ]]> */
    </script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/plugins/wp-ulike/assets/js/wp-ulike.min.js?ver=4.7.4" id="wp_ulike-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/bootstrap.bundle.min.js?ver=1.2.12" id="bootstrap-bundle-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/jquery.waypoints.min.js?ver=1.2.12" id="waypoints-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/jquery.easing.min.js?ver=1.2.12" id="jquery-easing-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/scrollup.min.js?ver=1.2.12" id="vodi-scrollup-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/jquery.fancybox.min.js?ver=1.2.12" id="jquery-fancybox-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/readmore.min.js?ver=3.0.0" id="readmore-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/simplebar.min.js?ver=1.2.12" id="simplebar-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/slick.min.js?ver=1.2.12" id="slick-js"></script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/vodi-slick.min.js?ver=1.2.12" id="vodi-slick-js"></script>
    <script type="text/javascript" id="vodi-slick-js-after">
        /* <![CDATA[ */
        jQuery(document).ready(function($) {
            var single = $('#movies-sliders-66e58237f0636 .movies-sliders-single-content__inner');
            var gallery = $('#movies-sliders-66e58237f0636 .movies-sliders-gallery-images__inner');
            var killit = false;

            $('.movie-slide-gallery-image > img').on('click', function(e) {
                if (!killit) {
                    e.stopPropagation();
                    var idx = $(this).closest('.movie-slide-gallery-image').data('thumb');
                    single.slick('slickGoTo', idx);
                }
            });

            // need to register a flag that doesn't let us click the slider
            // as we are trying to swipe it.

            gallery
                .on('beforeChange', function() {
                    killit = true;
                }).on('afterChange', function() {
                    killit = false;
                });
        });

        /* ]]> */
    </script>
    <script type="text/javascript" id="vodi-scripts-js-extra">
        /* <![CDATA[ */
        var vodi_options = {
            "rtl": "0",
            "enable_live_search": "",
            "enable_sticky_header": "",
            "enable_hh_sticky_header": "",
            "ajax_url": "https:\/\/vodi.madrasthemes.com\/main\/wp-admin\/admin-ajax.php",
            "deal_countdown_text": {
                "days_text": "Days",
                "hours_text": "Hours",
                "mins_text": "Mins",
                "secs_text": "Secs"
            },
            "wp_local_time_offset": "5.5",
            "enable_vodi_readmore": "1",
            "vodi_readmore_data": [{
                "selectors": ".single-episode-v1 .episode__description > div, .single-episode-v2 .episode__description > div, .single-episode-v2 .episode__description > div, .single-episode-v4 .episode__short-description > p",
                "options": {
                    "moreLink": "<a class=\"maxlist-more\" href=\"#\">Read More<\/a>",
                    "lessLink": "<a class=\"maxlist-less\" href=\"#\">Show Less<\/a>",
                    "collapsedHeight": 47,
                    "speed": 600
                }
            }, {
                "selectors": ".single-movie-v1 .movie__description > div, .single-movie-v2 .movie__description > div, .single-movie-v3 .movie__description > div, .single-movie-v4 .movie__info--head .movie__short-description > p",
                "options": {
                    "moreLink": "<a class=\"maxlist-more\" href=\"#\">Read More<\/a>",
                    "lessLink": "<a class=\"maxlist-less\" href=\"#\">Show Less<\/a>",
                    "collapsedHeight": 47,
                    "speed": 600
                }
            }, {
                "selectors": ".single-video .single-video__description > div",
                "options": {
                    "moreLink": "<a class=\"maxlist-more\" href=\"#\">Show more<\/a>",
                    "lessLink": "<a class=\"maxlist-less\" href=\"#\">Show less<\/a>",
                    "collapsedHeight": 0,
                    "speed": 600
                }
            }],
            "vodi_fancybox_options": {
                "speedIn": 300,
                "speedOut": 300
            }
        };
        /* ]]> */
    </script>
    <script type="text/javascript" src="https://vodi.madrasthemes.com/main/wp-content/themes/vodi/assets/js/vodi.min.js?ver=1.2.12" id="vodi-scripts-js"></script>

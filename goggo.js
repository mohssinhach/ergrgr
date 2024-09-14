<script type="text/javascript">
        /* <![CDATA[ */
        window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
            "ext": ".png",
            "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
            "svgExt": ".svg",
            "source": {
                "concatemoji": "https:\/\/vodi.madrasthemes.com\/main\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.6.2"
            }
        };
        /*! This file is auto-generated */
        ! function(i, n) {
            var o, s, e;

            function c(e) {
                try {
                    var t = {
                        supportTests: e,
                        timestamp: (new Date).valueOf()
                    };
                    sessionStorage.setItem(o, JSON.stringify(t))
                } catch (e) {}
            }

            function p(e, t, n) {
                e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
                var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
                    r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
                return t.every(function(e, t) {
                    return e === r[t]
                })
            }

            function u(e, t, n) {
                switch (t) {
                    case "flag":
                        return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
                    case "emoji":
                        return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b")
                }
                return !1
            }

            function f(e, t, n) {
                var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"),
                    a = r.getContext("2d", {
                        willReadFrequently: !0
                    }),
                    o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
                return e.forEach(function(e) {
                    o[e] = t(a, e, n)
                }), o
            }

            function t(e) {
                var t = i.createElement("script");
                t.src = e, t.defer = !0, i.head.appendChild(t)
            }
            "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
                everything: !0,
                everythingExceptFlag: !0
            }, e = new Promise(function(e) {
                i.addEventListener("DOMContentLoaded", e, {
                    once: !0
                })
            }), new Promise(function(t) {
                var n = function() {
                    try {
                        var e = JSON.parse(sessionStorage.getItem(o));
                        if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
                    } catch (e) {}
                    return null
                }();
                if (!n) {
                    if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                        var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));",
                            r = new Blob([e], {
                                type: "text/javascript"
                            }),
                            a = new Worker(URL.createObjectURL(r), {
                                name: "wpTestEmojiSupports"
                            });
                        return void(a.onmessage = function(e) {
                            c(n = e.data), a.terminate(), t(n)
                        })
                    } catch (e) {}
                    c(n = f(s, u, p))
                }
                t(n)
            }).then(function(e) {
                for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
                n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function() {
                    n.DOMReady = !0
                }
            }).then(function() {
                return e
            }).then(function() {
                var e;
                n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
            }))
        }((window, document), window._wpemojiSettings);
        /* ]]> */
    </script>
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

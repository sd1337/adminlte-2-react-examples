import React, { Component } from 'react';
import uuidv4 from 'uuid';

import {
  Content, Row, Col, Tabs, TabContent, Alert,
} from 'adminlte-2-react';

import './Icons.css';

class Icons extends Component {
  state = {}

  fontAwesomeIcons = {
    new: ['fa-500px', 'fa-amazon', 'fa-balance-scale', 'fa-battery-0(alias)', 'fa-battery-1(alias)', 'fa-battery-2(alias)', 'fa-battery-3(alias)', 'fa-battery-4(alias)', 'fa-battery-empty', 'fa-battery-full', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-three-quarters', 'fa-black-tie', 'fa-calendar-check-o', 'fa-calendar-minus-o', 'fa-calendar-plus-o', 'fa-calendar-times-o', 'fa-cc-diners-club', 'fa-cc-jcb', 'fa-chrome', 'fa-clone', 'fa-commenting', 'fa-commenting-o', 'fa-contao', 'fa-creative-commons', 'fa-expeditedssl', 'fa-firefox', 'fa-fonticons', 'fa-genderless', 'fa-get-pocket', 'fa-gg', 'fa-gg-circle', 'fa-hand-grab-o(alias)', 'fa-hand-lizard-o', 'fa-hand-paper-o', 'fa-hand-peace-o', 'fa-hand-pointer-o', 'fa-hand-rock-o', 'fa-hand-scissors-o', 'fa-hand-spock-o', 'fa-hand-stop-o(alias)', 'fa-hourglass', 'fa-hourglass-1(alias)', 'fa-hourglass-2(alias)', 'fa-hourglass-3(alias)', 'fa-hourglass-end', 'fa-hourglass-half', 'fa-hourglass-o', 'fa-hourglass-start', 'fa-houzz', 'fa-i-cursor', 'fa-industry', 'fa-internet-explorer', 'fa-map', 'fa-map-o', 'fa-map-pin', 'fa-map-signs', 'fa-mouse-pointer', 'fa-object-group', 'fa-object-ungroup', 'fa-odnoklassniki', 'fa-odnoklassniki-square', 'fa-opencart', 'fa-opera', 'fa-optin-monster', 'fa-registered', 'fa-safari', 'fa-sticky-note', 'fa-sticky-note-o', 'fa-television', 'fa-trademark', 'fa-tripadvisor', 'fa-tv(alias)', 'fa-vimeo', 'fa-wikipedia-w', 'fa-y-combinator', 'fa-yc(alias)'],
    webApplication: ['fa-adjust', 'fa-anchor', 'fa-archive', 'fa-area-chart', 'fa-arrows', 'fa-arrows-h', 'fa-arrows-v', 'fa-asterisk', 'fa-at', 'fa-automobile(alias)', 'fa-balance-scale', 'fa-ban', 'fa-bank(alias)', 'fa-bar-chart', 'fa-bar-chart-o(alias)', 'fa-barcode', 'fa-bars', 'fa-battery-0(alias)', 'fa-battery-1(alias)', 'fa-battery-2(alias)', 'fa-battery-3(alias)', 'fa-battery-4(alias)', 'fa-battery-empty', 'fa-battery-full', 'fa-battery-half', 'fa-battery-quarter', 'fa-battery-three-quarters', 'fa-bed', 'fa-beer', 'fa-bell', 'fa-bell-o', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-bicycle', 'fa-binoculars', 'fa-birthday-cake', 'fa-bolt', 'fa-bomb', 'fa-book', 'fa-bookmark', 'fa-bookmark-o', 'fa-briefcase', 'fa-bug', 'fa-building', 'fa-building-o', 'fa-bullhorn', 'fa-bullseye', 'fa-bus', 'fa-cab(alias)', 'fa-calculator', 'fa-calendar', 'fa-calendar-check-o', 'fa-calendar-minus-o', 'fa-calendar-o', 'fa-calendar-plus-o', 'fa-calendar-times-o', 'fa-camera', 'fa-camera-retro', 'fa-car', 'fa-caret-square-o-down', 'fa-caret-square-o-left', 'fa-caret-square-o-right', 'fa-caret-square-o-up', 'fa-cart-arrow-down', 'fa-cart-plus', 'fa-cc', 'fa-certificate', 'fa-check', 'fa-check-circle', 'fa-check-circle-o', 'fa-check-square', 'fa-check-square-o', 'fa-child', 'fa-circle', 'fa-circle-o', 'fa-circle-o-notch', 'fa-circle-thin', 'fa-clock-o', 'fa-clone', 'fa-close(alias)', 'fa-cloud', 'fa-cloud-download', 'fa-cloud-upload', 'fa-code', 'fa-code-fork', 'fa-coffee', 'fa-cog', 'fa-cogs', 'fa-comment', 'fa-comment-o', 'fa-commenting', 'fa-commenting-o', 'fa-comments', 'fa-comments-o', 'fa-compass', 'fa-copyright', 'fa-creative-commons', 'fa-credit-card', 'fa-crop', 'fa-crosshairs', 'fa-cube', 'fa-cubes', 'fa-cutlery', 'fa-dashboard(alias)', 'fa-database', 'fa-desktop', 'fa-diamond', 'fa-dot-circle-o', 'fa-download', 'fa-edit(alias)', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-envelope', 'fa-envelope-o', 'fa-envelope-square', 'fa-eraser', 'fa-exchange', 'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-external-link', 'fa-external-link-square', 'fa-eye', 'fa-eye-slash', 'fa-eyedropper', 'fa-fax', 'fa-feed(alias)', 'fa-female', 'fa-fighter-jet', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-code-o', 'fa-file-excel-o', 'fa-file-image-o', 'fa-file-movie-o(alias)', 'fa-file-pdf-o', 'fa-file-photo-o(alias)', 'fa-file-picture-o(alias)', 'fa-file-powerpoint-o', 'fa-file-sound-o(alias)', 'fa-file-video-o', 'fa-file-word-o', 'fa-file-zip-o(alias)', 'fa-film', 'fa-filter', 'fa-fire', 'fa-fire-extinguisher', 'fa-flag', 'fa-flag-checkered', 'fa-flag-o', 'fa-flash(alias)', 'fa-flask', 'fa-folder', 'fa-folder-o', 'fa-folder-open', 'fa-folder-open-o', 'fa-frown-o', 'fa-futbol-o', 'fa-gamepad', 'fa-gavel', 'fa-gear(alias)', 'fa-gears(alias)', 'fa-gift', 'fa-glass', 'fa-globe', 'fa-graduation-cap', 'fa-group(alias)', 'fa-hand-grab-o(alias)', 'fa-hand-lizard-o', 'fa-hand-paper-o', 'fa-hand-peace-o', 'fa-hand-pointer-o', 'fa-hand-rock-o', 'fa-hand-scissors-o', 'fa-hand-spock-o', 'fa-hand-stop-o(alias)', 'fa-hdd-o', 'fa-headphones', 'fa-heart', 'fa-heart-o', 'fa-heartbeat', 'fa-history', 'fa-home', 'fa-hotel(alias)', 'fa-hourglass', 'fa-hourglass-1(alias)', 'fa-hourglass-2(alias)', 'fa-hourglass-3(alias)', 'fa-hourglass-end', 'fa-hourglass-half', 'fa-hourglass-o', 'fa-hourglass-start', 'fa-i-cursor', 'fa-image(alias)', 'fa-inbox', 'fa-industry', 'fa-info', 'fa-info-circle', 'fa-institution(alias)', 'fa-key', 'fa-keyboard-o', 'fa-language', 'fa-laptop', 'fa-leaf', 'fa-legal(alias)', 'fa-lemon-o', 'fa-level-down', 'fa-level-up', 'fa-life-bouy(alias)', 'fa-life-buoy(alias)', 'fa-life-ring', 'fa-life-saver(alias)', 'fa-lightbulb-o', 'fa-line-chart', 'fa-location-arrow', 'fa-lock', 'fa-magic', 'fa-magnet', 'fa-mail-forward(alias)', 'fa-mail-reply(alias)', 'fa-mail-reply-all(alias)', 'fa-male', 'fa-map', 'fa-map-marker', 'fa-map-o', 'fa-map-pin', 'fa-map-signs', 'fa-meh-o', 'fa-microphone', 'fa-microphone-slash', 'fa-minus', 'fa-minus-circle', 'fa-minus-square', 'fa-minus-square-o', 'fa-mobile', 'fa-mobile-phone(alias)', 'fa-money', 'fa-moon-o', 'fa-mortar-board(alias)', 'fa-motorcycle', 'fa-mouse-pointer', 'fa-music', 'fa-navicon(alias)', 'fa-newspaper-o', 'fa-object-group', 'fa-object-ungroup', 'fa-paint-brush', 'fa-paper-plane', 'fa-paper-plane-o', 'fa-paw', 'fa-pencil', 'fa-pencil-square', 'fa-pencil-square-o', 'fa-phone', 'fa-phone-square', 'fa-photo(alias)', 'fa-picture-o', 'fa-pie-chart', 'fa-plane', 'fa-plug', 'fa-plus', 'fa-plus-circle', 'fa-plus-square', 'fa-plus-square-o', 'fa-power-off', 'fa-print', 'fa-puzzle-piece', 'fa-qrcode', 'fa-question', 'fa-question-circle', 'fa-quote-left', 'fa-quote-right', 'fa-random', 'fa-recycle', 'fa-refresh', 'fa-registered', 'fa-remove(alias)', 'fa-reorder(alias)', 'fa-reply', 'fa-reply-all', 'fa-retweet', 'fa-road', 'fa-rocket', 'fa-rss', 'fa-rss-square', 'fa-search', 'fa-search-minus', 'fa-search-plus', 'fa-send(alias)', 'fa-send-o(alias)', 'fa-server', 'fa-share', 'fa-share-alt', 'fa-share-alt-square', 'fa-share-square', 'fa-share-square-o', 'fa-shield', 'fa-ship', 'fa-shopping-cart', 'fa-sign-in', 'fa-sign-out', 'fa-signal', 'fa-sitemap', 'fa-sliders', 'fa-smile-o', 'fa-soccer-ball-o(alias)', 'fa-sort', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-asc', 'fa-sort-desc', 'fa-sort-down(alias)', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-sort-up(alias)', 'fa-space-shuttle', 'fa-spinner', 'fa-spoon', 'fa-square', 'fa-square-o', 'fa-star', 'fa-star-half', 'fa-star-half-empty(alias)', 'fa-star-half-full(alias)', 'fa-star-half-o', 'fa-star-o', 'fa-sticky-note', 'fa-sticky-note-o', 'fa-street-view', 'fa-suitcase', 'fa-sun-o', 'fa-support(alias)', 'fa-tablet', 'fa-tachometer', 'fa-tag', 'fa-tags', 'fa-tasks', 'fa-taxi', 'fa-television', 'fa-terminal', 'fa-thumb-tack', 'fa-thumbs-down', 'fa-thumbs-o-down', 'fa-thumbs-o-up', 'fa-thumbs-up', 'fa-ticket', 'fa-times', 'fa-times-circle', 'fa-times-circle-o', 'fa-tint', 'fa-toggle-down(alias)', 'fa-toggle-left(alias)', 'fa-toggle-off', 'fa-toggle-on', 'fa-toggle-right(alias)', 'fa-toggle-up(alias)', 'fa-trademark', 'fa-trash', 'fa-trash-o', 'fa-tree', 'fa-trophy', 'fa-truck', 'fa-tty', 'fa-tv(alias)', 'fa-umbrella', 'fa-university', 'fa-unlock', 'fa-unlock-alt', 'fa-unsorted(alias)', 'fa-upload', 'fa-user', 'fa-user-plus', 'fa-user-secret', 'fa-user-times', 'fa-users', 'fa-video-camera', 'fa-volume-down', 'fa-volume-off', 'fa-volume-up', 'fa-warning(alias)', 'fa-wheelchair', 'fa-wifi', 'fa-wrench'],
    hand: ['fa-hand-grab-o(alias)', 'fa-hand-lizard-o', 'fa-hand-o-down', 'fa-hand-o-left', 'fa-hand-o-right', 'fa-hand-o-up', 'fa-hand-paper-o', 'fa-hand-peace-o', 'fa-hand-pointer-o', 'fa-hand-rock-o', 'fa-hand-scissors-o', 'fa-hand-spock-o', 'fa-hand-stop-o(alias)', 'fa-thumbs-down', 'fa-thumbs-o-down', 'fa-thumbs-o-up', 'fa-thumbs-up'],
    transportation: ['fa-ambulance', 'fa-automobile(alias)', 'fa-bicycle', 'fa-bus', 'fa-cab(alias)', 'fa-car', 'fa-fighter-jet', 'fa-motorcycle', 'fa-plane', 'fa-rocket', 'fa-ship', 'fa-space-shuttle', 'fa-subway', 'fa-taxi', 'fa-train', 'fa-truck', 'fa-wheelchair'],
    gender: ['fa-genderless', 'fa-intersex(alias)', 'fa-mars', 'fa-mars-double', 'fa-mars-stroke', 'fa-mars-stroke-h', 'fa-mars-stroke-v', 'fa-mercury', 'fa-neuter', 'fa-transgender', 'fa-transgender-alt', 'fa-venus', 'fa-venus-double', 'fa-venus-mars'],
    fileType: ['fa-file', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-code-o', 'fa-file-excel-o', 'fa-file-image-o', 'fa-file-movie-o(alias)', 'fa-file-o', 'fa-file-pdf-o', 'fa-file-photo-o(alias)', 'fa-file-picture-o(alias)', 'fa-file-powerpoint-o', 'fa-file-sound-o(alias)', 'fa-file-text', 'fa-file-text-o', 'fa-file-video-o', 'fa-file-word-o', 'fa-file-zip-o(alias)'],
    spinner: ['fa-circle-o-notch', 'fa-cog', 'fa-gear(alias)', 'fa-refresh', 'fa-spinner'],
    formControl: ['fa-check-square', 'fa-check-square-o', 'fa-circle', 'fa-circle-o', 'fa-dot-circle-o', 'fa-minus-square', 'fa-minus-square-o', 'fa-plus-square', 'fa-plus-square-o', 'fa-square', 'fa-square-o'],
    payment: ['fa-cc-amex', 'fa-cc-diners-club', 'fa-cc-discover', 'fa-cc-jcb', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-cc-visa', 'fa-credit-card', 'fa-google-wallet', 'fa-paypal'],
    chart: ['fa-area-chart', 'fa-bar-chart', 'fa-bar-chart-o(alias)', 'fa-line-chart', 'fa-pie-chart'],
    currency: ['fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-bold', 'fa-chain(alias)', 'fa-chain-broken', 'fa-clipboard', 'fa-columns', 'fa-copy(alias)', 'fa-cut(alias)', 'fa-dedent(alias)', 'fa-eraser', 'fa-file', 'fa-file-o', 'fa-file-text', 'fa-file-text-o', 'fa-files-o', 'fa-floppy-o', 'fa-font', 'fa-header', 'fa-indent', 'fa-italic', 'fa-link', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-outdent', 'fa-paperclip', 'fa-paragraph', 'fa-paste(alias)', 'fa-repeat', 'fa-rotate-left(alias)', 'fa-rotate-right(alias)', 'fa-save(alias)', 'fa-scissors', 'fa-strikethrough', 'fa-subscript', 'fa-superscript', 'fa-table', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-underline', 'fa-undo', 'fa-unlink(alias)', 'fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-bold', 'fa-chain(alias)', 'fa-chain-broken', 'fa-clipboard', 'fa-columns', 'fa-copy(alias)', 'fa-cut(alias)', 'fa-dedent(alias)', 'fa-eraser', 'fa-file', 'fa-file-o', 'fa-file-text', 'fa-file-text-o', 'fa-files-o', 'fa-floppy-o', 'fa-font', 'fa-header', 'fa-indent', 'fa-italic', 'fa-link', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-outdent', 'fa-paperclip', 'fa-paragraph', 'fa-paste(alias)', 'fa-repeat', 'fa-rotate-left(alias)', 'fa-rotate-right(alias)', 'fa-save(alias)', 'fa-scissors', 'fa-strikethrough', 'fa-subscript', 'fa-superscript', 'fa-table', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-underline', 'fa-undo', 'fa-unlink(alias)'],
    textEditor: ['fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-bold', 'fa-chain(alias)', 'fa-chain-broken', 'fa-clipboard', 'fa-columns', 'fa-copy(alias)', 'fa-cut(alias)', 'fa-dedent(alias)', 'fa-eraser', 'fa-file', 'fa-file-o', 'fa-file-text', 'fa-file-text-o', 'fa-files-o', 'fa-floppy-o', 'fa-font', 'fa-header', 'fa-indent', 'fa-italic', 'fa-link', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-outdent', 'fa-paperclip', 'fa-paragraph', 'fa-paste(alias)', 'fa-repeat', 'fa-rotate-left(alias)', 'fa-rotate-right(alias)', 'fa-save(alias)', 'fa-scissors', 'fa-strikethrough', 'fa-subscript', 'fa-superscript', 'fa-table', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-underline', 'fa-undo', 'fa-unlink(alias)'],
    directional: ['fa-angle-double-down', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-arrow-circle-down', 'fa-arrow-circle-left', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-left', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-up', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-down', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrows', 'fa-arrows-alt', 'fa-arrows-h', 'fa-arrows-v', 'fa-caret-down', 'fa-caret-left', 'fa-caret-right', 'fa-caret-square-o-down', 'fa-caret-square-o-left', 'fa-caret-square-o-right', 'fa-caret-square-o-up', 'fa-caret-up', 'fa-chevron-circle-down', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-down', 'fa-chevron-left', 'fa-chevron-right', 'fa-chevron-up', 'fa-exchange', 'fa-hand-o-down', 'fa-hand-o-left', 'fa-hand-o-right', 'fa-hand-o-up', 'fa-long-arrow-down', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-long-arrow-up', 'fa-toggle-down(alias)', 'fa-toggle-left(alias)', 'fa-toggle-right(alias)', 'fa-toggle-up(alias)'],
    videoPlayer: ['fa-arrows-alt', 'fa-backward', 'fa-compress', 'fa-eject', 'fa-expand', 'fa-fast-backward', 'fa-fast-forward', 'fa-forward', 'fa-pause', 'fa-play', 'fa-play-circle', 'fa-play-circle-o', 'fa-random', 'fa-step-backward', 'fa-step-forward', 'fa-stop', 'fa-youtube-play'],
    brands: ['fa-500px', 'fa-adn', 'fa-amazon', 'fa-android', 'fa-angellist', 'fa-apple', 'fa-behance', 'fa-behance-square', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-bitcoin(alias)', 'fa-black-tie', 'fa-btc', 'fa-buysellads', 'fa-cc-amex', 'fa-cc-diners-club', 'fa-cc-discover', 'fa-cc-jcb', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-cc-visa', 'fa-chrome', 'fa-codepen', 'fa-connectdevelop', 'fa-contao', 'fa-css3', 'fa-dashcube', 'fa-delicious', 'fa-deviantart', 'fa-digg', 'fa-dribbble', 'fa-dropbox', 'fa-drupal', 'fa-empire', 'fa-expeditedssl', 'fa-facebook', 'fa-facebook-f(alias)', 'fa-facebook-official', 'fa-facebook-square', 'fa-firefox', 'fa-flickr', 'fa-fonticons', 'fa-forumbee', 'fa-foursquare', 'fa-ge(alias)', 'fa-get-pocket', 'fa-gg', 'fa-gg-circle', 'fa-git', 'fa-git-square', 'fa-github', 'fa-github-alt', 'fa-github-square', 'fa-gittip(alias)', 'fa-google', 'fa-google-plus', 'fa-google-plus-square', 'fa-google-wallet', 'fa-gratipay', 'fa-hacker-news', 'fa-houzz', 'fa-html5', 'fa-instagram', 'fa-internet-explorer', 'fa-ioxhost', 'fa-joomla', 'fa-jsfiddle', 'fa-lastfm', 'fa-lastfm-square', 'fa-leanpub', 'fa-linkedin', 'fa-linkedin-square', 'fa-linux', 'fa-maxcdn', 'fa-meanpath', 'fa-medium', 'fa-odnoklassniki', 'fa-odnoklassniki-square', 'fa-opencart', 'fa-openid', 'fa-opera', 'fa-optin-monster', 'fa-pagelines', 'fa-paypal', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-pinterest', 'fa-pinterest-p', 'fa-pinterest-square', 'fa-qq', 'fa-ra(alias)', 'fa-rebel', 'fa-reddit', 'fa-reddit-square', 'fa-renren', 'fa-safari', 'fa-sellsy', 'fa-share-alt', 'fa-share-alt-square', 'fa-shirtsinbulk', 'fa-simplybuilt', 'fa-skyatlas', 'fa-skype', 'fa-slack', 'fa-slideshare', 'fa-soundcloud', 'fa-spotify', 'fa-stack-exchange', 'fa-stack-overflow', 'fa-steam', 'fa-steam-square', 'fa-stumbleupon', 'fa-stumbleupon-circle', 'fa-tencent-weibo', 'fa-trello', 'fa-tripadvisor', 'fa-tumblr', 'fa-tumblr-square', 'fa-twitch', 'fa-twitter', 'fa-twitter-square', 'fa-viacoin', 'fa-vimeo', 'fa-vimeo-square', 'fa-vine', 'fa-vk', 'fa-wechat(alias)', 'fa-weibo', 'fa-weixin', 'fa-whatsapp', 'fa-wikipedia-w', 'fa-windows', 'fa-wordpress', 'fa-xing', 'fa-xing-square', 'fa-y-combinator', 'fa-y-combinator-square(alias)', 'fa-yahoo', 'fa-yc(alias)', 'fa-yc-square(alias)', 'fa-yelp', 'fa-youtube', 'fa-youtube-play', 'fa-youtube-square'],
    medical: ['fa-ambulance', 'fa-h-square', 'fa-heart', 'fa-heart-o', 'fa-heartbeat', 'fa-hospital-o', 'fa-medkit', 'fa-plus-square', 'fa-stethoscope', 'fa-user-md'],
  }

  glyphicons = ['glyphicon-asterisk', 'glyphicon-plus', 'glyphicon-euro', 'glyphicon-eur', 'glyphicon-minus', 'glyphicon-cloud', 'glyphicon-envelope', 'glyphicon-pencil', 'glyphicon-glass', 'glyphicon-music', 'glyphicon-search', 'glyphicon-heart', 'glyphicon-star', 'glyphicon-star-empty', 'glyphicon-user', 'glyphicon-film', 'glyphicon-th-large', 'glyphicon-th', 'glyphicon-th-list', 'glyphicon-ok', 'glyphicon-remove', 'glyphicon-zoom-in', 'glyphicon-zoom-out', 'glyphicon-off', 'glyphicon-signal', 'glyphicon-cog', 'glyphicon-trash', 'glyphicon-home', 'glyphicon-file', 'glyphicon-time', 'glyphicon-road', 'glyphicon-download-alt', 'glyphicon-download', 'glyphicon-upload', 'glyphicon-inbox', 'glyphicon-play-circle', 'glyphicon-repeat', 'glyphicon-refresh', 'glyphicon-list-alt', 'glyphicon-lock', 'glyphicon-flag', 'glyphicon-headphones', 'glyphicon-volume-off', 'glyphicon-volume-down', 'glyphicon-volume-up', 'glyphicon-qrcode', 'glyphicon-barcode', 'glyphicon-tag', 'glyphicon-tags', 'glyphicon-book', 'glyphicon-bookmark', 'glyphicon-print', 'glyphicon-camera', 'glyphicon-font', 'glyphicon-bold', 'glyphicon-italic', 'glyphicon-text-height', 'glyphicon-text-width', 'glyphicon-align-left', 'glyphicon-align-center', 'glyphicon-align-right', 'glyphicon-align-justify', 'glyphicon-list', 'glyphicon-indent-left', 'glyphicon-indent-right', 'glyphicon-facetime-video', 'glyphicon-picture', 'glyphicon-map-marker', 'glyphicon-adjust', 'glyphicon-tint', 'glyphicon-edit', 'glyphicon-share', 'glyphicon-check', 'glyphicon-move', 'glyphicon-step-backward', 'glyphicon-fast-backward', 'glyphicon-backward', 'glyphicon-play', 'glyphicon-pause', 'glyphicon-stop', 'glyphicon-forward', 'glyphicon-fast-forward', 'glyphicon-step-forward', 'glyphicon-eject', 'glyphicon-chevron-left', 'glyphicon-chevron-right', 'glyphicon-plus-sign', 'glyphicon-minus-sign', 'glyphicon-remove-sign', 'glyphicon-ok-sign', 'glyphicon-question-sign', 'glyphicon-info-sign', 'glyphicon-screenshot', 'glyphicon-remove-circle', 'glyphicon-ok-circle', 'glyphicon-ban-circle', 'glyphicon-arrow-left', 'glyphicon-arrow-right', 'glyphicon-arrow-up', 'glyphicon-arrow-down', 'glyphicon-share-alt', 'glyphicon-resize-full', 'glyphicon-resize-small', 'glyphicon-exclamation-sign', 'glyphicon-gift', 'glyphicon-leaf', 'glyphicon-fire', 'glyphicon-eye-open', 'glyphicon-eye-close', 'glyphicon-warning-sign', 'glyphicon-plane', 'glyphicon-calendar', 'glyphicon-random', 'glyphicon-comment', 'glyphicon-magnet', 'glyphicon-chevron-up', 'glyphicon-chevron-down', 'glyphicon-retweet', 'glyphicon-shopping-cart', 'glyphicon-folder-close', 'glyphicon-folder-open', 'glyphicon-resize-vertical', 'glyphicon-resize-horizontal', 'glyphicon-hdd', 'glyphicon-bullhorn', 'glyphicon-bell', 'glyphicon-certificate', 'glyphicon-thumbs-up', 'glyphicon-thumbs-down', 'glyphicon-hand-right', 'glyphicon-hand-left', 'glyphicon-hand-up', 'glyphicon-hand-down', 'glyphicon-circle-arrow-right', 'glyphicon-circle-arrow-left', 'glyphicon-circle-arrow-up', 'glyphicon-circle-arrow-down', 'glyphicon-globe', 'glyphicon-wrench', 'glyphicon-tasks', 'glyphicon-filter', 'glyphicon-briefcase', 'glyphicon-fullscreen', 'glyphicon-dashboard', 'glyphicon-paperclip', 'glyphicon-heart-empty', 'glyphicon-link', 'glyphicon-phone', 'glyphicon-pushpin', 'glyphicon-usd', 'glyphicon-gbp', 'glyphicon-sort', 'glyphicon-sort-by-alphabet', 'glyphicon-sort-by-alphabet-alt', 'glyphicon-sort-by-order', 'glyphicon-sort-by-order-alt', 'glyphicon-sort-by-attributes', 'glyphicon-sort-by-attributes-alt', 'glyphicon-unchecked', 'glyphicon-expand', 'glyphicon-collapse-down', 'glyphicon-collapse-up', 'glyphicon-log-in', 'glyphicon-flash', 'glyphicon-log-out', 'glyphicon-new-window', 'glyphicon-record', 'glyphicon-save', 'glyphicon-open', 'glyphicon-saved', 'glyphicon-import', 'glyphicon-export', 'glyphicon-send', 'glyphicon-floppy-disk', 'glyphicon-floppy-saved', 'glyphicon-floppy-remove', 'glyphicon-floppy-save', 'glyphicon-floppy-open', 'glyphicon-credit-card', 'glyphicon-transfer', 'glyphicon-cutlery', 'glyphicon-header', 'glyphicon-compressed', 'glyphicon-earphone', 'glyphicon-phone-alt', 'glyphicon-tower', 'glyphicon-stats', 'glyphicon-sd-video', 'glyphicon-hd-video', 'glyphicon-subtitles', 'glyphicon-sound-stereo', 'glyphicon-sound-dolby', 'glyphicon-sound-5-1', 'glyphicon-sound-6-1', 'glyphicon-sound-7-1', 'glyphicon-copyright-mark', 'glyphicon-registration-mark', 'glyphicon-cloud-download', 'glyphicon-cloud-upload', 'glyphicon-tree-conifer', 'glyphicon-tree-deciduous', 'glyphicon-cd', 'glyphicon-save-file', 'glyphicon-open-file', 'glyphicon-level-up', 'glyphicon-copy', 'glyphicon-paste', 'glyphicon-alert', 'glyphicon-equalizer', 'glyphicon-king', 'glyphicon-queen', 'glyphicon-pawn', 'glyphicon-bishop', 'glyphicon-knight', 'glyphicon-baby-formula', 'glyphicon-tent', 'glyphicon-blackboard', 'glyphicon-bed', 'glyphicon-apple', 'glyphicon-erase', 'glyphicon-hourglass', 'glyphicon-lamp', 'glyphicon-duplicate', 'glyphicon-piggy-bank', 'glyphicon-scissors', 'glyphicon-bitcoin', 'glyphicon-btc', 'glyphicon-xbt', 'glyphicon-yen', 'glyphicon-jpy', 'glyphicon-ruble', 'glyphicon-rub', 'glyphicon-scale', 'glyphicon-ice-lolly', 'glyphicon-ice-lolly-tasted', 'glyphicon-education', 'glyphicon-option-horizontal', 'glyphicon-option-vertical', 'glyphicon-menu-hamburger', 'glyphicon-modal-window', 'glyphicon-oil', 'glyphicon-grain', 'glyphicon-sunglasses', 'glyphicon-text-size', 'glyphicon-text-color', 'glyphicon-text-background', 'glyphicon-object-align-top', 'glyphicon-object-align-bottom', 'glyphicon-object-align-horizontal', 'glyphicon-object-align-left', 'glyphicon-object-align-vertical', 'glyphicon-object-align-right', 'glyphicon-triangle-right', 'glyphicon-triangle-left', 'glyphicon-triangle-bottom', 'glyphicon-triangle-top', 'glyphicon-console', 'glyphicon-superscript', 'glyphicon-subscript', 'glyphicon-menu-left', 'glyphicon-menu-right', 'glyphicon-menu-down', 'glyphicon-menu-up']

  renderFontAwesomeIcons(icons) {
    return this.fontAwesomeIcons[icons].map((p) => {
      if (p.indexOf('(alias)') < 0) {
        return (
          <Col key={uuidv4()} md={3} sm={4}>
            <i className={`fa fa-fw ${p}`} />
            {` ${p}`}
          </Col>
        );
      }
      return (
        <Col key={uuidv4()} md={3} sm={4}>
          <i className={`fa fa-fw ${p.replace('(alias)', '')}`} />
          {` ${p.replace('(alias)', '')}`}
          <span className="text-muted"> (alias)</span>
        </Col>
      );
    });
  }

  render() {
    return (
      <Content title="Icons" subTitle="a set of beautiful icons">
        <Tabs activeKey="fa-icons">
          <TabContent title="Font Awesome" eventKey="fa-icons">
            <Alert closable type="danger" icon="fa-ban" title="Info!">
              {'This page is horrible outdated and still referes to FontAwesome v4. If you are looking for the available icons in v5 go to '}
              <a target="_blank" rel="noopener noreferrer" href="https://fontawesome.com/icons?d=gallery">fontawesome.com</a>
            </Alert>
            <section id="new">
              <h4 className="page-header">66 New Icons in 4.4</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('new')}
              </Row>
            </section>
            <section id="web-application">
              <h4 className="page-header">Web Application Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('webApplication')}
              </Row>
            </section>
            <section id="hand">
              <h4 className="page-header">Hand Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('hand')}
              </Row>
            </section>
            <section id="transportation">
              <h4 className="page-header">Transportation Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('transportation')}
              </Row>
            </section>
            <section id="gender">
              <h4 className="page-header">Gender Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('gender')}
              </Row>
            </section>
            <section id="file-type">
              <h4 className="page-header">File Type Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('fileType')}
              </Row>
            </section>
            <section id="spinner">
              <h4 className="page-header">Spinner Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('spinner')}
              </Row>
            </section>
            <section id="form-control">
              <h4 className="page-header">Form Control Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('formControl')}
              </Row>
            </section>
            <section id="payment">
              <h4 className="page-header">Payment Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('payment')}
              </Row>
            </section>
            <section id="chart">
              <h4 className="page-header">Chart Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('chart')}
              </Row>
            </section>
            <section id="currency">
              <h4 className="page-header">Currency Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('currency')}
              </Row>
            </section>
            <section id="text-editor">
              <h4 className="page-header">Text Editor Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('textEditor')}
              </Row>
            </section>
            <section id="directional">
              <h4 className="page-header">Directional Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('directional')}
              </Row>
            </section>
            <section id="video-player">
              <h4 className="page-header">Video Player Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('videoPlayer')}
              </Row>
            </section>
            <section id="brand">
              <h4 className="page-header">Brand Icons</h4>
              <Alert type="info">
                <ul className="margin-bottom-none padding-left-lg">
                  <li>All brand icons are trademarks of their respective owners.</li>
                  <li>
                    The use of these trademarks does not indicate endorsement of the trademark holder by Font
                                                      Awesome, nor vice versa.

                  </li>
                </ul>
              </Alert>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('brands')}
              </Row>
            </section>
            <section id="medical">
              <h4 className="page-header">Medical Icons</h4>
              <Row className="fontawesome-icon-list">
                {this.renderFontAwesomeIcons('medical')}
              </Row>
            </section>
          </TabContent>
          <TabContent title="Glyphicons" eventKey="glyphicons">
            <ul className="bs-glyphicons">
              {this.glyphicons.map(p => (
                <li key={uuidv4()}>
                  <span className={`glyphicon ${p}`} />
                  <span className="glyphicon-class">{`glyphicon ${p}`}</span>
                </li>
              ))}
            </ul>
          </TabContent>
        </Tabs>
      </Content>
    );
  }
}

export default Icons;

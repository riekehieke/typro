'use strict';
//Rechtsklick deaktivieren
$(function () {
    $(this).bind('contextmenu', function (e) {
        e.preventDefault();
    });
});
// Dauer Anzeige Splash Page
setTimeout(function () {
    $(':mobile-pagecontainer').pagecontainer('change', $('#home'));
}, 2000);
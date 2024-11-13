
(function() {
    "use strict";

    AOS.init({
        duration: 700,
        easing: 'ease',
        once: true
    });

    new CircleType(document.getElementById('circle-type'));

    var circleText = document.getElementById('circle-type');
    window.addEventListener('scroll', function(){
        circleText.style.transform = "rotate("+window.pageYOffset+"deg)";
    })
})();
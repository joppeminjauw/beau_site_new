window.onscroll = function () {
    stickNavbar();
    activateSection();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("nav-stick")
    } else {
        navbar.classList.remove("nav-stick");
    }
}

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 900, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

activateSection = () => {
    var sections = $('section');
    var nav = $('nav');
    var pos = $(document).scrollTop();

    sections.each(function () {

        var top = $(this).offset().top-100;
        var bottom = top + $(this).outerHeight();

        if (pos >= top && pos <= bottom) {
            var id = $(this).attr('id');

            if (id) {   
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + id + '"]').addClass('active');
            }
        }
    });
}
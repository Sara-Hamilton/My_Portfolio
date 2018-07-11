// scrolls to top of page on refresh
(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#SaraHamilton').offset().top - 50
         }, 2000);
    });
})(jQuery);

// smooth scroll to nav bar links
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        var target = $(this.hash);
        var navbar = document.getElementById("navBar");
        var navbarHeight = $(navbar).height();
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - navbarHeight
            }, 2000);
            return false;
        }
    });
});

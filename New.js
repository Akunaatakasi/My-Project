window.onload = function(){
    var banner = document.getElementById("promoBanner");
    banner.classList.add('active');

    var closeButton = document.getElementById('closeBanner');
        closeButton.onclick = function () {
        banner.classList.remove('active');
    }

    var shopNow = document.getElementById('shopNow');
    shopNow.onclick = function() {
        banner.classList.remove('active');
    }
}
function scrollToTop() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);  // Adding a slight delay to ensure the page is fully loaded before scrolling
}

window.addEventListener('DOMContentLoaded', scrollToTop);

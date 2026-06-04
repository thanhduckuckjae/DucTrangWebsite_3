'use strict';

(function () {
    var parents = document.querySelectorAll('.menu__item--has-children');

    parents.forEach(function (item) {
        var link = item.querySelector('.menu__link--parent');
        if (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth < 767) {
                    e.preventDefault();
                    item.classList.toggle('menu__item--open');
                }
            });
        }
    });
}());

'use strict';

(function () {
    var parents = document.querySelectorAll('.menu__item--has-children');

    parents.forEach(function (item) {
        var btn = item.querySelector('.menu__arrow-btn');
        if (btn) {
            btn.addEventListener('click', function (e) {
                if (window.innerWidth < 767) {
                    e.stopPropagation();
                    item.classList.toggle('menu__item--open');
                }
            });
        }
    });
}());

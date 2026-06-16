'use strict';

(function () {
    var btns = document.querySelectorAll('.authorbox__quote-btn');
    if (!btns.length) return;

    var toast = document.createElement('div');
    toast.className = 'contact-toast';
    document.body.appendChild(toast);
    var toastTimer = null;

    function showToast(text) {
        toast.textContent = text;
        toast.classList.add('contact-toast--visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove('contact-toast--visible');
        }, 4000);
    }

    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var email = btn.getAttribute('href').replace(/^mailto:/, '').split('?')[0];
            var isEn = btn.dataset.lang === 'en';
            var message = isEn
                ? 'Email copied: ' + email + '. Opening your mail app…'
                : 'Đã sao chép email: ' + email + '. Đang mở ứng dụng email…';

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).catch(function () {});
            }
            showToast(message);
        });
    });
}());

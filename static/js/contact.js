'use strict';

(function () {
    var btns = document.querySelectorAll('.authorbox__quote-btn');
    if (!btns.length) return;

    var COUNTER_KEY = 'ductrang-net-button-interactions';
    var counterEls = document.querySelectorAll('[data-interaction-count]');

    function setCounterText(value) {
        counterEls.forEach(function (el) {
            el.textContent = value;
        });
    }

    if (counterEls.length && window.fetch) {
        fetch('https://abacus.jasoncameron.dev/get/' + COUNTER_KEY)
            .then(function (res) { return res.json(); })
            .then(function (data) { setCounterText(data.value); })
            .catch(function () { setCounterText('—'); });
    }

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
            if (window.fetch) {
                fetch('https://abacus.jasoncameron.dev/hit/' + COUNTER_KEY)
                    .then(function (res) { return res.json(); })
                    .then(function (data) { setCounterText(data.value); })
                    .catch(function () {});
            }

            var href = btn.getAttribute('href') || '';
            var isEn = btn.dataset.lang === 'en';

            if (href.indexOf('tel:') === 0) {
                var phone = href.replace(/^tel:/, '');
                var message = isEn
                    ? 'Calling ' + phone + '…'
                    : 'Đang gọi ' + phone + '…';
                showToast(message);
                return;
            }

            if (href.indexOf('mailto:') === 0) {
                var email = href.replace(/^mailto:/, '').split('?')[0];
                var msg = isEn
                    ? 'Email copied: ' + email + '. Opening your mail app…'
                    : 'Đã sao chép email: ' + email + '. Đang mở ứng dụng email…';

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(email).catch(function () {});
                }
                showToast(msg);
            }
        });
    });
}());

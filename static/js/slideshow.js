'use strict';

(function() {
  var companyImages = [
  '/img/company/Xe%20N%C3%A2ng/20230816_074440.jpg',
  '/img/company/Xe%20N%C3%A2ng/20241205_145633.jpg',
  '/img/company/Xe%20N%C3%A2ng/20241220_170013.jpg',
  '/img/company/Xe%20N%C3%A2ng/20250406_104803.jpg',
  '/img/company/Xe%20N%C3%A2ng/IMG_1758683248126_1758683276164.jpg',
  '/img/company/Xe%20N%C3%A2ng/01%20Mitsubishi%2025%20t%E1%BA%A5n%20v%C3%A0ng/20250521_132504.jpg',
  '/img/company/Xe%20N%C3%A2ng/02%20Toyota%2013.5%20t%E1%BA%A5n%20cam/20260117_132819.jpg',
  '/img/company/Xe%20N%C3%A2ng/03%20Toyota%2010%20t%E1%BA%A5n%20%C4%91%E1%BB%8F/TimePhoto_20251018_065225.jpg',
  '/img/company/Xe%20N%C3%A2ng/04%20Komatsu%206%20t%E1%BA%A5n%20v%C3%A0ng/20251030_161822.jpg',
  '/img/company/Xe%20N%C3%A2ng/05%20Daewoo%205%20t%E1%BA%A5n%20v%C3%A0ng/20250203_105320.jpg',
  '/img/company/Xe%20N%C3%A2ng/06%20Komatsu%205%20t%E1%BA%A5n%20v%C3%A0ng/20250510_123831.jpg',
  '/img/company/Xe%20N%C3%A2ng/07%20Mitsubishi%205%20t%E1%BA%A5n%20xanh%20c%C3%A0ng%20cao/20241003_111700.jpg',
  '/img/company/Xe%20N%C3%A2ng/08%20TCM%203.5%20t%E1%BA%A5n%20v%C3%A0ng/IMG_1727929027846_1727929186686.jpg',
  '/img/company/Xe%20N%C3%A2ng/09%20Mitsubishi%203.5%20t%E1%BA%A5n%20v%C3%A0ng%20c%C3%A0ng%20th%E1%BA%A5p/20241202_144150.jpg',
  '/img/company/Xe%20N%C3%A2ng/10%20Komatsu%203%20t%E1%BA%A5n%20v%C3%A0ng%20xanh%2012/20251008_162141.jpg',
  '/img/company/Xe%20N%C3%A2ng/11%20Komatsu%203%20t%E1%BA%A5n%20v%C3%A0ng%2017/TimePhoto_20240726_180457.jpg',
  '/img/company/Xe%20N%C3%A2ng/12%20Mitsubishi%203%20t%E1%BA%A5n%20xanh/20251216_150646.jpg',
  '/img/company/Xe%20N%C3%A2ng/13%20Toyota%203%20t%E1%BA%A5n%20cam/20250506_171215.jpg',
  '/img/company/Xe%20N%C3%A2ng/14%20TCM%203%20t%E1%BA%A5n%20v%C3%A0ng/20260120_160541.jpg',
  '/img/company/Xe%20N%C3%A2ng/15%20Mitsubishi%202.5%20t%E1%BA%A5n%20xanh/IMG_1712059780402_1712647371980.jpg',
  '/img/company/Xe%20N%C3%A2ng/16%20Toyota%202.5%20t%E1%BA%A5n%20%C4%91%E1%BB%8F/20250819_175639.jpg',
  '/img/company/Xe%20N%C3%A2ng/17%20Toyota%202.5%20t%E1%BA%A5n%20v%C3%A0ng/20250305_171754.jpg',
  '/img/company/Xe%20N%C3%A2ng/18%20Toyota%202.5%20t%E1%BA%A5n%20xanh/20250730_130613.jpg',
  '/img/company/Xe%20N%C3%A2ng/19%20Toyota%202.5%20t%E1%BA%A5n%20cam/20250725_095757.jpg',
  '/img/company/Xe%20N%C3%A2ng/20%20Komatsu%202.5%20t%E1%BA%A5n%20v%C3%A0ng%20xanh%2016/20250316_072643.jpg',
  '/img/company/Xe%20N%C3%A2ng/21%20Komatsu%202.5%20t%E1%BA%A5n%20v%C3%A0ng%20xanh%2014/20251008_162141.jpg',
  '/img/company/Xe%20N%C3%A2ng/22%20Shinko%201.8%20t%E1%BA%A5n%20xanh/IMG_1675913035096_1675916442813.jpg',
  '/img/company/Xe%20N%C3%A2ng/23%20Samsung%202.5%20t%E1%BA%A5n%20%C4%91%E1%BB%8F/20240413_162951.jpg',
  '/img/company/Xe%20N%C3%A2ng/24%20Others/20230816_074440.jpg',
  '/img/company/Others/20231129_130754.jpg',
  '/img/company/Others/20231129_130910.jpg',
  '/img/company/Others/20240529_092402.jpg',
  '/img/company/Others/20240927_085739.jpg',
  '/img/company/Others/20250521_100855.jpg',
  '/img/company/Others/20260415_124527.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/20251010_142953.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/20251010_143437.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/20251213_144821.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/20251229_135921.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/20251229_141406.jpg',
  '/img/company/Thi%E1%BA%BFt%20b%E1%BB%8B/IMG_20251007_144204.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/AK%20Vina%20G%C3%B2%20D%E1%BA%A7u/20241105_141442.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/AP%20MC/20260320_133927.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Ashton/20230508_175217.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Bao%20B%C3%AC%20%C4%90%E1%BA%A1m%20Ph%C3%BA%20M%E1%BB%B9/20231215_111422.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/BOE%20Ph%C3%BA%20M%E1%BB%B9/20250701_115056.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/B%E1%BB%99t%20M%C3%AC%20MeKong/20230225_142852.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Broad%20Ocean%20Motor/20260421_133801.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/C%E1%BA%A3ng%20B%E1%BA%A3o%20Long/IMG_1703928223034_1703947160850.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/C%E1%BA%A3ng%20Bason/20241101_101552.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/C%E1%BA%A3ng%20CMIT/20251223_105909.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Coretronic/20230525_114825.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/D%E1%BB%87t%20AOJIA/IMG_1697106024888_1697159540095.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/%C4%90i%E1%BB%87n%20L%E1%BB%B1c%20Ph%C3%BA%20M%E1%BB%B9/20260425_162843.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Elite%20Ch%C3%A2u%20%C4%90%E1%BB%A9c/20260407_113803.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Fullxin%20Ch%C3%A2u%20%C4%90%E1%BB%A9c/20241111_153703.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Hoa%20Sen%20Ph%C3%BA%20M%E1%BB%B9/20230329_163916.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Hong%20Ming/IMG_1747101838882_1747102583142.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Hyosung%20Vina%20Core%20Materials/20241120_135642.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Josin%20Cables/20250403_103047.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Kimcooks/20221205_125825.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Kingspan%20Ph%C3%BA%20M%E1%BB%B9/TimePhoto_20251201_134156.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/L%E1%BB%8Dc%20d%E1%BA%A7u%20Long%20S%C6%A1n/IMG_1729746129043_1729746263175.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Long%20Ph%C3%A1t%20EC/20250206_174808.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Nh%C3%B4m%20To%C3%A0n%20C%E1%BA%A7u/20250104_115131.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/%E1%BB%90ng%20th%C3%A9p%20S%C3%A0i%20G%C3%B2n/20231228_103942.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Powder%20Metallurgy%20Jinding/20250829_114751.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/PTL/20240214_070035.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Reiwapharm%20%C4%90%E1%BA%A5t%20%C4%90%E1%BB%8F/20251014_144846.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Rhino/%E1%BA%A2nh%20xe.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Sao%20%C4%90%E1%BA%B9p%20H%E1%BA%AFc%20D%E1%BB%8Bch/20251118_103751.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Sotran/20230104_075517.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Tripod%20Ch%C3%A2u%20%C4%90%E1%BB%A9c/20251112_161529.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/TVP/20231213_144135.jpg',
  '/img/company/%C4%90%E1%BB%91i%20t%C3%A1c/Xe%20c%E1%BA%A9u%2081/20231122_100026.jpg'
  ];

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  shuffle(companyImages);

  function startSlideshow(img) {
    var idx = Math.floor(Math.random() * companyImages.length);
    img.src = companyImages[idx];
    img.style.transition = 'opacity 1s ease';
    setInterval(function() {
      img.style.opacity = '0';
      setTimeout(function() {
        idx = (idx + 1) % companyImages.length;
        img.src = companyImages[idx];
        img.style.opacity = '1';
      }, 1000);
    }, 5000);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var thumbs = document.querySelectorAll('.list__thumbnail img, .post__thumbnail img');
    thumbs.forEach(function(img) {
      startSlideshow(img);
    });
  });
}());

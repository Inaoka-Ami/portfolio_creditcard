//////////// ハンバーガーメニュー ////////////
$(".hamburger_icon").on("click", function (e) {
  $(".hamburger-nav").slideToggle();
});

// クリックしたら閉じる
$('.hamburger-nav a[href]').on('click', function (event) {
  $('.hamburger_icon').trigger('click');
});


//////////// カード発行までの流れ スライド ////////////
var swiper = new Swiper('.swiper', {
  // loop: false,
  slidesPerView: 1,
  spaceBetween: 34,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 58,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    formatFractionTotal: function (n) {
      return '0' + n;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//////////// 他にも特典・サービスがたくさん アコーディオン ////////////
// .accordion_title がクリックされたときの処理
$('.accordion_title').on('click', function (e) {
  var content = $(this).next('dd'); // クリックされた要素に関連するコンテンツを取得
  content.slideToggle();
});

// .accordion_title_span がクリックされたときの処理
$('.accordion_title_span').on('click', function (e) {
  // クリックしたときに親要素のスライドトグルを呼び出す
  $(this).closest('.accordion_title').click();
  e.stopPropagation(); // 親要素へのバブリングを防ぐ
});

// +-の動き
$(function () {
  $(".accordion_title").on('click', function () {
    $(this).toggleClass("open");
  });
});
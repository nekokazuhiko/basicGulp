//fancybox //不知道為啥但是得放在最上頭
//自動打開thumbnails
// $('[data-fancybox]').fancybox({
//     thumbs : {
//         autoStart : true
//     }
// })


// scroll to top
$(document).ready(function () {
  $(".goTop a").click(function () {
      return $("html, body").animate({
        scrollTop: 0
      }, "slow"), !1
    }),
    $("#mobile-toggle").click(function () {
      $(this).toggleClass("active"),
        $("#mobile-overlay").toggleClass("open")
        })

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //使用javascript回傳使用者瀏覽裝置的版本
        $('div.article-container > div.editor').find('img').removeAttr('style');
    };
});

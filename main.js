function ScrollTimelineAnime() {
    $('.timeline li').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var startPoint = 200;
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true)
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;
            if (percent > 100) {
                percent = 100;
            }
            $(this).children('.border-line').css({
                height: percent + "%",
            });
        }
    });
}

$(window).on('scroll', function () {
    ScrollTimelineAnime();
});

function fadeAnime() {
    $('.fadeInTrigger').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');
        } else {
            $(this).removeClass('fadeIn');
        }
    });

    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    });

    $('.fadeLeftTrigger').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');
        } else {
            $(this).removeClass('fadeLeft');
        }
    });

    $('.fadeRightTrigger').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeRight');
        } else {
            $(this).removeClass('fadeRight');
        }
    });

}

$(window).scroll(function () {
    fadeAnime();
});

function fadeAnime02() {
    $('.fadeInTrigger02').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');
        } else {
            $(this).removeClass('fadeIn');
        }
    });

}


$(window).on('load', function () {
    fadeAnime02();
});

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#sp_nav").toggleClass('panelactive');
});

$("#sp_nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#sp_nav").removeClass('panelactive');
});

function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
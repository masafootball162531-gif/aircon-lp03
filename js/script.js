// JavaScript Document

// jQueryで背景色を黄色にする

//$(".box_first").css("background","yellow");

//-------------------------------------

//htmlを読み込みを終えてから下記の命令実行する。※ jQueryがhead内にあっても使えるようにある。コード

$(document).ready(function () {});
//--実際に使うと下記-----------------------------------

$(document).ready(function () {
  $(".box_first").css("background", "yellow");
});

//--上記を省略したバージョン-----------------------------------

//$(function(){
//
//
//	$(".box_first").css("background","yellow");
//
//	});

// 一定数ページが下へ移動した時に出現させるコード↓

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    // 300pxスクロールしたら表示
    $(".bottom_btn_area").fadeIn();
  } else {
    $(".bottom_btn_area").fadeOut();
  }
});

// 脈打つCTAボタン
$(document).ready(function () {
  $(".tel_btn").addClass("heartbeat");

  // ホバー時にアニメーションを一時停止する場合は以下を追加
  $(".tel_btn").hover(
    function () {
      $(this).css("animation-play-state", "paused");
    },
    function () {
      $(this).css("animation-play-state", "running");
    }
  );
});

// 下まで行ったら自動で１００PX戻る

$(function () {
  function isMobile() {
    return /iPhone|Android.+Mobile/.test(navigator.userAgent);
  }

  const triggerRange = 100; // 下から何px以内で発動
  const scrollBackAmount = 100; // 何px戻すか
  const buffer = 10; // 誤差許容（ピクセル）

  let scrollLock = false;

  $(window).on("scroll", function () {
    if (!isMobile()) return;

    setTimeout(function () {
      // setTimeoutで少し遅らせるとスマホのアドレスバー変化の影響が減る
      var scrollTop = $(window).scrollTop();
      var windowHeight = window.innerHeight || $(window).height();
      var documentHeight = $(document).height();

      var distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom <= triggerRange + buffer && !scrollLock) {
        scrollLock = true;

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: scrollTop - scrollBackAmount,
            },
            100,
            function () {
              setTimeout(function () {
                scrollLock = false;
              }, 500);
            }
          );
      }
    }, 50); // 50ミリ秒遅らせて、アドレスバーなどの影響を軽減
  });
});

// ブラウザバック時の離脱防止POP
document.addEventListener("DOMContentLoaded", function () {
  const exitPopup = document.querySelector("#exitPopup");
  if (!exitPopup) return;

  const closeButtons = document.querySelectorAll("[data-exit-popup-close]");
  let exitPopupArmed = false;
  let backPopupShown = false;
  let allowExitNavigation = false;

  window.setTimeout(function () {
    exitPopupArmed = true;
  }, 1200);

  const openExitPopup = function () {
    if (!exitPopupArmed) return;
    exitPopup.hidden = false;
    document.body.classList.add("is-exit-popup-open");
    exitPopup.querySelector(".exit-popup-close")?.focus();
  };

  const closeExitPopup = function () {
    exitPopup.hidden = true;
    document.body.classList.remove("is-exit-popup-open");
  };

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeExitPopup);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !exitPopup.hidden) {
      closeExitPopup();
    }
  });

  try {
    window.history.replaceState(
      { ...window.history.state, airconDashExitBase: true },
      ""
    );
    window.history.pushState({ airconDashExitPopupGuard: true }, "");

    window.addEventListener("popstate", function () {
      if (allowExitNavigation) return;

      if (backPopupShown) {
        allowExitNavigation = true;
        window.history.back();
        return;
      }

      backPopupShown = true;
      openExitPopup();
      window.history.pushState({ airconDashExitPopupGuard: true }, "");
    });
  } catch (error) {
    // 一部ブラウザでは履歴操作が制限されるため、その場合は通常遷移に任せます。
  }
});

// 下まで行ったら自動で１００PX戻る

$(function () {
  function isMobile() {
    return /iPhone|Android.+Mobile/.test(navigator.userAgent);
  }

  const triggerRange = 100; // 下から何px以内で発動
  const scrollBackAmount = 100; // 何px戻すか
  const buffer = 10; // 誤差許容（ピクセル）

  let scrollLock = false;

  $(window).on("scroll", function () {
    if (!isMobile()) return;

    setTimeout(function () {
      // setTimeoutで少し遅らせるとスマホのアドレスバー変化の影響が減る
      var scrollTop = $(window).scrollTop();
      var windowHeight = window.innerHeight || $(window).height();
      var documentHeight = $(document).height();

      var distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom <= triggerRange + buffer && !scrollLock) {
        scrollLock = true;

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: scrollTop - scrollBackAmount,
            },
            100,
            function () {
              setTimeout(function () {
                scrollLock = false;
              }, 500);
            }
          );
      }
    }, 50); // 50ミリ秒遅らせて、アドレスバーなどの影響を軽減
  });
});

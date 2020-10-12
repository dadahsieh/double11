$(document).ready(function () {




  // 跑馬燈
  $(function () {
    // 先取得 div#abgne_marquee ul
    // 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
    // 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
    // 設定跑馬燈移動的速度及輪播的速度
    var $marqueeUl = $('#abgne_marquee ul'),
      $marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
      _height = $('#abgne_marquee').height() * -1,
      scrollSpeed = 600,
      timer,
      speed = 3000 + scrollSpeed;

    // 幫左邊 $marqueeli 加上 hover 事件
    // 當滑鼠移入時停止計時器；反之則啟動
    $marqueeli.hover(function () {
      clearTimeout(timer);
    }, function () {
      timer = setTimeout(showad, speed);
    });

    // 控制跑馬燈移動的處理函式
    function showad() {
      var _now = $marqueeUl.position().top / _height;
      _now = (_now + 1) % $marqueeli.length;

      // $marqueeUl 移動
      $marqueeUl.animate({
        top: _now * _height
      }, scrollSpeed, function () {
        // 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
        // 藉此產生不間斷的輪播
        if (_now == $marqueeli.length / 2) {
          $marqueeUl.css('top', 0);
        }
      });

      // 再啟動計時器
      timer = setTimeout(showad, speed);
    }

    // 啟動計時器
    timer = setTimeout(showad, speed);

    $('a').focus(function () {
      this.blur();
    });
  });

  // 初始值隱藏
  $(".lightbox").hide();
  $(".eyecatch").hide();
  $(".awards").hide();

  $(".gameStart").click(function () {
    // 過場動畫
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'data.json'
    });
    $(".lightbox").fadeIn();
    $(".eyecatch").fadeIn().delay(1700).fadeOut();
    $(".awards").delay(2500).fadeIn();
  });
  $(".closeBtn").click(function () {
    $(".alert").fadeOut();
  });
});
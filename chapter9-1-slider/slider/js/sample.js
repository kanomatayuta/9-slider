(function () {
  // setImageスライダーに表示する画像を配列で代入
  const setImage = [
    "img/slide-img/sample-1.jpg",
    "img/slide-img/sample-2.jpg",
    "img/slide-img/sample-3.jpg",
    "img/slide-img/sample-4.jpg"
  ];
  // 現在表示されている画像
  const view = document.getElementById('view');
  // 前の画像
  const prev = document.getElementById('prev');
  // 次の画像
  const next = document.getElementById('next');

  // 現在表示されている画像のインデックス番号
  let index = 0;
  // 連続クリック(アニメーションが終わる前まで)を防止のためボタンのイベント処理に使用
  let clickBtn = true;

  // 前へボタンをクリック時
  prev.addEventListener('click', function () {
    if (clickBtn === true) {
      // clickBtnの真偽値がfalseの時だけクリックできない
      clickBtn = false;
      // スライドショーのクラス（appear）を追加
      view.classList.add("anime");
      // index番号−１つ減;
      index--;
      // indexが0より小さくなったりしないようにif文で分岐
      // indexとsetImage.lengthの整合性を合わせるためにsetImage.lengthから-1
      if (index < 0) index = setImage.length - 1;
      // setImageの配列から現在のインデックス番号の画像を取り出す
      view.src = setImage[index];
      // スライドショーのクラス（anime）を外す
      setTimeout('view.classList.remove("anime");', 2100);
      setTimeout(function () {
        // clickBtnの真偽値がtrueの時だけクリックできる
        clickBtn = true;
      }, 2100);
    } else {
      return false;
    }
  });

  // 次へボタンをクリック時
  next.addEventListener('click', function () {
    if (clickBtn === true) {
      // clickBtnの真偽値がfalseの時だけクリックできない
      clickBtn = false;
      // スライドショーのクラス（appear）を追加
      view.classList.add("anime");
      // index番号t＋１つ増;
      index++;
      // indexの数値と画像の枚数が同じ値になるとindex値を０に戻す
      if (index === setImage.length) index = 0;
      // setImageの配列から現在のインデックス番号の画像を取り出す
      view.src = setImage[index];
      // スライドショーのクラス（anime）を外す
      setTimeout('view.classList.remove("anime");', 2100);
      setTimeout(function () {
        // clickBtnの真偽値がtrueの時だけクリックできる
        clickBtn = true;
      }, 2100);
    } else {
      return false;
    }
  });

  // 自動再生
  function autoPlay() {
    // 次へボタンを5秒ごとにクリックする処理
    setTimeout(function () {
      next.click();
      autoPlay();
    }, 5000);
  }
  // ページが読み込まれたら自動再生するように実行
  window.onload = autoPlay();
})();
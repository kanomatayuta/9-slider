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
  let current = 0;
  // 連続クリック(アニメーションが終わる前まで)を防止のためボタンのイベント処理に使用
  let clickBtn = true;

  // 前へボタンをクリック時
  prev.addEventListener('click', function () {
    if (clickBtn === true) {
      // clickBtnの真偽地がfalseの時だけクリックできない
      clickBtn = false;
      // スライドショーのクラス（appear）を追加
      view.classList.add("anime");
      // current−１つ減;
      current--;
      // current0より小さくなったりしないようにif文で分岐
      if (current < 0) {
        // currentとsetImage.lengthの整合性を合わせるためにsetImage.lengthから-1
        current = setImage.length - 1;
      }
      // currentをインデックス番号として変数setImageの配列からcurrentのインデックス番号の画像を取り出す
      view.src = setImage[current];
      // スライドショーのクラス（anime）を外す
      setTimeout('view.classList.remove("anime");', 3100);
      setTimeout(function () {
        // clickBtnの真偽地がtrueの時だけクリックできる
        clickBtn = true;
      }, 3100);
    } else {
      return false;
    }
  });

  // 次へボタンをクリック時
  next.addEventListener('click', function () {
    if (clickBtn === true) {
      // clickBtnの真偽地がfalseの時だけクリックできない
      clickBtn = false;
      // スライドショーのクラス（appear）を追加
      view.classList.add("anime");
      // current＋１つ増;
      current++;
      // currentの数値が画像の枚数より多くなったりしないようにif文で分岐
      if (current > setImage.length - 1) {
        // 上限まで行くと０に戻す
        current = 0;
      }
      // currentをインデックス番号として変数setImageの配列からcurrentのインデックス番号の画像を取り出す
      view.src = setImage[current];
      // スライドショーのクラス（anime）を外す
      setTimeout('view.classList.remove("anime");', 3100);
      setTimeout(function () {
        // clickBtnの真偽地がtrueの時だけクリックできる
        clickBtn = true;
      }, 3100);
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
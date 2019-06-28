'use strict';

{
  const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      // クリックしたら乱数を取得
      const n = Math.floor(Math.random() * 3);
      // btn.textContent = n;

      // 乱数に名前をつける
      switch (n) {
        case 0:
          btn.textContent = '大吉';
          break;
        case 1:
          btn.textContent = '吉';
          break;
        case 2:
          btn.textContent = '凶';
          break;
      }
    });

    // マウスダウンした時にプレスをつける
    btn.addEventListener('mousedown', () => {
      btn.classList.add('pressed');
    });

    // マウスアップでプレスを外す
    btn.addEventListener('mouseup', () => {
      btn.classList.remove('pressed');
    });
}
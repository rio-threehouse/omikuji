'use strict';

{
  const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      // 配列取得
      const results = ['大吉', '吉', '凶', '末吉'];
      // クリックしたら乱数を取得 個数は配列の数にするlength
      const n = Math.floor(Math.random() * results.length);
            
      btn.textContent = results[n];
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
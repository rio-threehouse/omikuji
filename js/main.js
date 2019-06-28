'use strict';

{
  const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
    // 確率を加える
    const n = Math.random();

      if (n < 0.1) {
        btn.textContent = "凶" ;//10%
      } else if (n < 0.4) { 
        btn.textContent = '末吉'; //30%
      } else if (n < 0.7) {
        btn.textContent = '吉'; //30%
      } else {
        btn.textContent = '大吉';  //30%
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
'use strict';

{
  const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      btn.textContent = 'hit!';
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
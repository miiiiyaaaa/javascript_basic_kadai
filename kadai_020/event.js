const bTn = document.getElementById('btn');

const teXt = document.getElementById('text');


bTn.addEventListener ('click', () => {
    teXt.textContent = 'ボタンをクリックしました';
});
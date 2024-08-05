const bTn = document.getElementById('btn');

const teXt = document.getElementById('text');


/*bTn.addEventListener ('click', () => {
    teXt.textContent = 'ボタンをクリックしました';
});

setTimeout(() => {
    teXt.textContent = 'ボタンをクリックしました';
}, 2000);*/

bTn.addEventListener ('click', () => {
    setTimeout(() => {
        teXt.textContent ='ボタンをクリックしました';
    }, 2000)
});
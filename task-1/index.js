const key = document.getElementById('key');
const button = document.getElementById('newGame');
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let currentKeyIndex = 0;

function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);

    key.textContent = keys[currentKeyIndex];
}

function showNotification(text, type) {
    PNotify.alert({
        text: text,
        type: type,
        delay: 1000
    });
}

function startNewGame() {
    setNewKey();
    showNotification('Нова гра розпочалась!', 'success');
}

document.addEventListener('keydown', (e) => {
    const pressedKey = e.key.toUpperCase();
    const currentKey = keys[currentKeyIndex];

    if (pressedKey === currentKey) {
        showNotification('Правильно', 'success');
        setNewKey();
    } else {
        showNotification('Помилка', 'error');
    }
});


button.addEventListener('click', startNewGame);
startNewGame();
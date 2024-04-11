const sonucInput = document.getElementById('sonuc');
const buttons = document.querySelectorAll('.button');
let işlemSonucu = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.textContent;
        if (button.classList.contains('sayı')) {
            işlemSonucu += buttonValue;
        } else if (button.classList.contains('işaret')) {
            işlemSonucu += ' ' + buttonValue + ' ';
        } else if (button.classList.contains('sil')) {
            işlemSonucu = '';
        } else if (button.classList.contains('hesapla')) {
            işlemSonucu   = eval(işlemSonucu);
        }
        sonucInput.value = işlemSonucu;
    });
});
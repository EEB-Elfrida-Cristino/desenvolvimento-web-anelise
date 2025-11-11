const input = document.getElementById('busca');
const cards = document.querySelectorAll('.card');

input.addEventListener('input', () => {
    const valor = input.value.toLowerCase();

    cards.forEach(card => {

        if (card.id.toLowerCase().includes(valor)) {
            card.classList.remove('hidden');
        } else{
            card.classList.add('hidden');
        }
    })
})
// Obtém o elemento de áudio
const audio = document.getElementById("myAudio");

// Define o volume padrão para 50%
audio.volume = 0.4;

// EFEITO DE MOUSE:

// Obtém todos os elementos li que representam Pokémon
const pokemonElements = document.querySelectorAll("ol li");

// Adiciona os ouvintes de eventos para cada elemento Pokémon
pokemonElements.forEach(function(pokemonElement) {
    pokemonElement.addEventListener("mouseover", function() {
        changeColor(this);
    });

    pokemonElement.addEventListener("mouseout", function() {
        restoreColor(this);
    });
});

function changeColor(element) {
    element.style.color = "#ababab";
}

function restoreColor(element) {
    element.style.color = "#F5F5F5FF";
}


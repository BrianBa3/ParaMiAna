// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Todo cambió", time: 0, duration: 3},
  { text: "Cuando te vi", time: 2, duration: 3 },
  { text: "De blanco y negro a color", time: 7, duration: 4 },
  { text: "Me convertí", time: 10, duration: 4 },

  { text: "Y fue tan fácil", time: 15, duration: 3 },
  { text: "Quererte tanto", time: 17, duration: 3 },
  { text: "Algo que no imaginaba", time: 19, duration: 5 },
  { text: "Fue entregarte mi amor", time: 24, duration: 3 },
  { text: "Con una mirada", time: 27, duration: 4 },

  { text: "Todo tembló", time: 33, duration: 3 },
  { text: "Dentro de mí", time: 36, duration: 3 },
  { text: "El universo escribió", time: 41, duration: 3 },
  { text: "Que fueras para mí", time: 43, duration: 4 },

  { text: "Y fue tan fácil", time: 48, duration: 4 },
  { text: "Quererte tanto", time: 51, duration: 3 },
  { text: "Algo que no imaginaba", time: 53, duration: 5 },
  { text: "Fue perderme en tu amor", time: 57, duration: 4 },
  { text: "Simplemente pasó", time: 60, duration: 3 },
  { text: "Y todo tuyo ya soy", time: 61, duration: 4 },
  
  { text: "Antes que pase más", time: 65, duration: 3 },
  { text: "Tiempo contigo amor", time: 67, duration: 3 },
  { text: "Tengo que decir que eres el amor de mi vida", time: 69, duration: 5 },
  { text: "Antes que te ame más", time: 73, duration: 3 },
  { text: "Escucha por favor", time: 75, duration: 3 },
  { text: "Déjame decir que todo te di", time: 78, duration: 4 },
  { text: "Y no hay cómo explicar", time: 82  , duration: 3 },
  { text: "Pero, menos notar", time: 83, duration: 4 },
  { text: "Simplemente, así lo sentí", time: 86, duration: 4 },
  { text: "Cuando te vi ", time: 90, duration: 4 },

  { text: "Me sorprendió", time: 96, duration: 3 },
  { text: "Todo de ti ", time: 98, duration: 3 },
  { text: "De blanco y negro a color", time: 103, duration: 4 },
  { text: "Me convertí", time: 106, duration: 4 },

  { text: "Sé que no es fácil", time: 111, duration: 3 },
  { text: "Decir te amo", time: 113, duration: 3 },
  { text: "Yo tampoco lo esperaba", time: 115, duration: 5 },
  { text: "Pero, así es el amor", time: 120, duration: 3 },
  { text: "Simplemente pasó", time: 122, duration: 3 },
  { text: "Y todo tuyo ya soy", time: 123, duration: 4 },

  { text: "Antes que pase más", time: 127, duration: 3 },
  { text: "Tiempo contigo amor", time: 129, duration: 3 }, 
  { text: "Tengo que decir que eres el amor de mi vida", time: 131, duration: 5 }, 
  { text: "Antes que te ame más", time: 135, duration: 3 }, 
  { text: "Escucha por favor", time: 137, duration: 4 }, 
  { text: "Déjame decir que todo te di", time: 140, duration: 5 }, 
  { text: "Y no hay cómo explicar", time: 144  , duration: 3 }, 
  { text: "Pero, menos notar", time: 145, duration: 4 }, 
  { text: "Simplemente, así lo sentí", time: 147, duration: 6 }, 
  { text: "Cuando te vi ", time: 153, duration: 5 }, 

  { text: "Todo cambió ", time: 160, duration: 4 }, 
  { text: "Cuando te vi ", time: 163, duration: 10 }, 
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.round(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

// Reproduce música automaticamente en cuanto se abre la página en el navegador.
window.onload = function() {
  var musica = document.getElementById("musicaDeFondo");
  musica.play();
}

  // Con esto, las nubes se moveran de una forma más aleatoria y de distintos tamaños.

  function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    // Tamaños aleatorios más variados.
    const sizeWidth = Math.random() * 200 + 100; // Ancho aleatorio entre 100 y 300px.
    const sizeHeight = sizeWidth * 0.3; // La altura es un 30% del ancho para mantener proporciones.
    cloud.style.width = `${sizeWidth}px`;
    cloud.style.height = `${sizeHeight}px`;
    // Posiciones completamente aleatorias.
    cloud.style.top = `${Math.random() * (window.innerHeight - sizeHeight)}px`;
    cloud.style.left = `${Math.random() * window.innerWidth}px`;
    // Retrasar la animación para que no todas las nubes se muevan al mismo tiempo.
    cloud.style.animationDelay = `${Math.random() * -20}s`; // Iniciar la animación en un punto aleatorio.
    cloud.style.animationDuration = `${Math.random() * 30 + 30}s`; // Duración aleatoria entre 30 y 60 segundos.
  
    document.body.appendChild(cloud);
  
    // Limpiar las nubes después de su animación.
    cloud.addEventListener('animationend', function() {
      cloud.parentElement.removeChild(cloud);
    });
  }
  
  function randomCloudGenerator() {
    // Intervalo para espaciar las nubes.
    const minDelay = 2000; // Mínimo 2 segundos.
    const randomDelay = Math.random() * 3000; // Hasta 3 segundos adicionales.
  
    // Se crea una nueva nube después de un retraso aleatorio.
    setTimeout(function() {
      createCloud();
      randomCloudGenerator();
    }, minDelay + randomDelay);
  }

  function createCloud(maxClouds) {
    const clouds = document.getElementsByClassName('cloud');
    if (clouds.length >= maxClouds) {
      // Si ya hay demasiadas nubes, no crea una nueva y sale de la función.
      return;
    }
  
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    const sizeWidth = Math.random() * 200 + 100;
    const sizeHeight = sizeWidth * 0.3;
    cloud.style.width = `${sizeWidth}px`;
    cloud.style.height = `${sizeHeight}px`;
    cloud.style.top = `${Math.random() * (window.innerHeight - sizeHeight)}px`;
    cloud.style.left = `-300px`; // Asegúrate de que las nubes comiencen fuera de la pantalla.
    cloud.style.animationDelay = `${Math.random() * -20}s`;
    cloud.style.animationDuration = `${Math.random() * 30 + 30}s`;
  
    document.body.appendChild(cloud);
  
    cloud.addEventListener('animationend', function() {
      cloud.parentElement.removeChild(cloud);
    });
  }
  
  function randomCloudGenerator() {
    const maxClouds = 20; // Número máximo de nubes.
  
    // Intervalo para espaciar las nubes.
    const minDelay = 2000;
    const randomDelay = Math.random() * 3000;
  
    // Crea una nueva nube después de un retraso aleatorio.
    setTimeout(function() {
      createCloud(maxClouds);
      randomCloudGenerator();
    }, minDelay + randomDelay);
  }
  
  window.onload = randomCloudGenerator;
  
// Título animado para la página.

  var originalTitle = "Kirby - Animado (Esto es un wallpaper animado(?) - ";
var titleIndex = 0;

function scrollTitle() {
  var title = originalTitle.substring(titleIndex) + originalTitle.substring(0, titleIndex);
  document.title = title;
  titleIndex++;
  if (titleIndex > originalTitle.length) {
    titleIndex = 0;
  }
}

setInterval(scrollTitle, 150); // Tiempo
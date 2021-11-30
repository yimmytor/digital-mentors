// Event Listeners
function eventListenerrAnimacion() {
    document.addEventListener('DOMContentLoaded', mostrarScroll);
    window.addEventListener('scroll', mostrarScroll);        
}


// Funciones
function mostrarScroll() {
    const animados = document.querySelectorAll('.animado'),
          scrollTop = document.documentElement.scrollTop;
    
    animados.forEach(elemento => {
        const alturaAnimado = elemento.offsetTop;
        
        if(alturaAnimado - 635 < scrollTop || esFinalScroll()) {
            if(elemento.classList.contains('derecha')) {
                elemento.style.opacity = 1;

                if (elemento.classList.contains('d1')) {
                    elemento.classList.add('entradaDerecha-d1');
                } else {
                    elemento.classList.add('entradaDerecha');
                }
            }else if(elemento.classList.contains('izquierda')) {                
                elemento.style.opacity = 1;
                
                if (elemento.classList.contains('d1')) {
                    elemento.classList.add('entradaIzquierda-d1');
                } else {
                    elemento.classList.add('entradaIzquierda');
                }
            }else if(elemento.classList.contains('arriba')) {                
                elemento.style.opacity = 1;
                
                if (elemento.classList.contains('d1')) {
                    elemento.classList.add('entradaArriba-d1');
                } else {
                    elemento.classList.add('entradaArriba');
                }
            }else if(elemento.classList.contains('abajo')) {                
                elemento.style.opacity = 1;
                
                if (elemento.classList.contains('d1')) {
                    elemento.classList.add('entradaAbajo-d1');
                } else {
                    elemento.classList.add('entradaAbajo');
                }
            }

        }
    });
}

// Final de Scroll
function esFinalScroll() {
    const scrollTop = document.documentElement.scrollTop,
          scrollHeight = document.documentElement.scrollHeight,
          windowHeight = window.innerHeight;
    
    return scrollHeight - scrollTop == windowHeight;
}

// Inicio
eventListenerrAnimacion();


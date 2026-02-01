// Menú de productos para Café Delicia Guatemala
const productos = {
  cafes: [
    {
      nombre: "Espresso",
      descripcion: "Café intenso y aromático, servido en taza pequeña.",
      precio: "Q15",
      imagen: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Café Latte",
      descripcion: "Café suave con leche vaporizada y espuma cremosa.",
      precio: "Q18",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Cappuccino",
      descripcion: "Café con leche y espuma, espolvoreado con cacao.",
      precio: "Q18",
      imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Americano",
      descripcion: "Café filtrado, suave y aromático.",
      precio: "Q14",
      imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Mocca",
      descripcion: "Café con chocolate y crema batida.",
      precio: "Q20",
      imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    }
  ],
  panes: [
    {
      nombre: "Pan de Banano",
      descripcion: "Pan artesanal con banano fresco y nueces.",
      precio: "Q12",
      imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Croissant",
      descripcion: "Clásico croissant francés, hojaldrado y mantequilloso.",
      precio: "Q14",
      imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Pan de Queso",
      descripcion: "Panecillo suave relleno de queso crema.",
      precio: "Q10",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Pan de Chocolate",
      descripcion: "Panecillo relleno de chocolate artesanal.",
      precio: "Q13",
      imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Baguette",
      descripcion: "Pan francés crujiente, ideal para acompañar.",
      precio: "Q11",
      imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    }
  ],
  postres: [
    {
      nombre: "Cheesecake de Frambuesa",
      descripcion: "Tarta cremosa con coulis de frambuesa natural.",
      precio: "Q22",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Brownie Artesanal",
      descripcion: "Brownie de chocolate oscuro, húmedo y delicioso.",
      precio: "Q16",
      imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Tiramisú",
      descripcion: "Postre italiano con café, cacao y mascarpone.",
      precio: "Q20",
      imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Pastel Tres Leches",
      descripcion: "Bizcocho bañado en tres tipos de leche, suave y dulce.",
      precio: "Q18",
      imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Pie de Limón",
      descripcion: "Base crujiente, relleno de limón y merengue tostado.",
      precio: "Q17",
      imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Flan Casero",
      descripcion: "Flan de huevo tradicional con caramelo líquido.",
      precio: "Q15",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Galleta de Avena",
      descripcion: "Galleta grande de avena y pasas, horneada a diario.",
      precio: "Q8",
      imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    }
  ],
  bebidas: [
    {
      nombre: "Chocolate Caliente",
      descripcion: "Bebida cremosa de chocolate artesanal.",
      precio: "Q14",
      imagen: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Té Chai Latte",
      descripcion: "Té especiado con leche vaporizada y canela.",
      precio: "Q16",
      imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Limonada Natural",
      descripcion: "Refrescante limonada con hierbabuena.",
      precio: "Q10",
      imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Smoothie de Fresa",
      descripcion: "Bebida fría de fresa natural y yogur.",
      precio: "Q15",
      imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
      nombre: "Agua Pura",
      descripcion: "Botella de agua pura fría.",
      precio: "Q6",
      imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

function renderMenu(categoria) {
  const lista = document.getElementById('menu-lista');
  lista.innerHTML = '';
  productos[categoria].forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>${item.descripcion}</p>
      <div class="precio">${item.precio}</div>
      <a href="../apartado-pedir/index.html" class="btn-pedir">Pedir</a>
    `;
    lista.appendChild(div);
  });
}


// Swipe para móvil: cambiar de categoría deslizando
function enableSwipeCategorias() {
  const categorias = Array.from(document.querySelectorAll('.menu-categoria'));
  let startX = null;
  let current = categorias.findIndex(btn => btn.classList.contains('activo'));
  const menuCategorias = document.querySelector('.menu-categorias');
  menuCategorias.addEventListener('touchstart', e => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  });
  menuCategorias.addEventListener('touchend', e => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0 && current < categorias.length - 1) current++;
      else if (diff > 0 && current > 0) current--;
      categorias.forEach(b => b.classList.remove('activo'));
      categorias[current].classList.add('activo');
      renderMenu(categorias[current].dataset.categoria);
    }
    startX = null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.menu-categoria');
  botones.forEach(btn => {
    btn.addEventListener('click', function() {
      botones.forEach(b => b.classList.remove('activo'));
      this.classList.add('activo');
      renderMenu(this.dataset.categoria);
    });
  });
  renderMenu('cafes');
  enableSwipeCategorias();
});

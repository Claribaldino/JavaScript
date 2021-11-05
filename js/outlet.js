const url = '../json/outlet.json'
  let mainoutlet = document.getElementById("mainoutlet")

  fetch(url)
    .then(response => response.json())
    .then(repos => { const data = repos
      
      for(const dato of data) {
        
        let plantilla = document.createElement('div')
        /* plantilla.classList.add("contain__flex") */
    
        plantilla.innerHTML = `
        <div class="contain__flex d-flex y flex-direction-column justify-content-center">
            <img src=${dato.imagen} alt=""/>
            <section class= "contain_section">
            <div class="contain__description">
            <div class="contain__title__product">${dato.nombre}</div>
            <div class="contain__title">${dato.talle}</div>
           </div>
            <div  class="content_price">
            <div class="price_text">
              <span class="price_span">Precio</span>
            </div>
            <div class="price__product">
              $${dato.precio}
            </div>
          </div>
          </section>
          </div>
        `;

        mainoutlet.appendChild(plantilla)

        }
    })
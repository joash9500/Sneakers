// renders all sneakers on homepage

function renderFilter() {
    console.log('running')
    const filterMenu = document.querySelector('#side-bar')
    filterMenu.style.display = 'inline-block'
    filterMenu.innerHTML = `
        <button onclick="" class="dropdown-brands">Brands</button>
        <ul id="filters">
            <li id="nike">Nike</li>
            <li id="addidas">Addidas</li>
            <button></button>
        </ul>
    `
}

function renderSneakers() {

    renderFilter() //run function to generate a filter form on the side bar
    axios
        .get("/api/sneakers")
        .then((response) => {
            const sneakers = response.data;
            console.log(sneakers)
            page = document.getElementById('content')
            page.innerHTML = ''
            for (index in sneakers) {
                const sneakerItem = document.createElement('div')
                sneakerItem.innerHTML =
                    `
            Name: ${sneakers[index].name}
            Description: ${sneakers[index].description}
            Brand: ${sneakers[index].brand}
            Purchase Place: ${sneakers[index].purchase_place}
            Size: ${sneakers[index].size}
            Type: ${sneakers[index].type}
            <img src="${sneakers[index].image_path}">
            Condition: ${sneakers[index].condition}
            `
            page.appendChild(sneakerItem)
            }
            
        });

}

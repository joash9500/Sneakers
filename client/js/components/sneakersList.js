// renders all sneakers on homepage

function renderSneakers() {

    renderFilterForm() //run function to generate a filter form on the side bar

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

function renderFilterForm() {
    console.log('running')

    const filterForm = document.querySelector('#side-bar')
    filterForm.style.display = 'inline-block'
    filterForm.innerHTML = `
        
    
    `


}
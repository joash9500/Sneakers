function renderMySneakers() {
    console.log('mySneakers page is rendeirng')
    axios
    .get("/api/sneakers")
    .then((response) => {
        const sneakers = response.data;
        console.log(sneakers)
        console.log(sneakers[1]['users_id']);
        page = document.getElementById('content')
        page.innerHTML = ''
        for(let shoe of sneakers) {
            console.log(shoe);
            console.log(shoe['users_id']);
            if(shoe['users_id'] === 2) {
                const sneakerItem = document.createElement('div')
                sneakerItem.innerHTML =
                        `
                Name: ${shoe.name}
                Description: ${shoe.description}
                Brand: ${shoe.brand}
                Purchase Place: ${shoe.purchase_place}
                Size: ${shoe.size}
                Type: ${shoe.type}
                <img src="${shoe.image_path}">
                `
                page.appendChild(sneakerItem)
                }
            }
        })
    }
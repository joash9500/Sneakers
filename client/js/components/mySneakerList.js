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
                <div class="card" style="width: 25rem">
                        <img class="card-img-top" src="${shoe.image_path}">
                    <div class="card-body">
                    <h5 class="card-title">${shoe.name}</h5>
                        <p><strong>Description:</strong> ${shoe.description}</p>
                        <p><strong>Brand:</strong> ${shoe.brand}</p>
                        <p><strong>Purchase Place:</strong> ${shoe.purchase_place}</p>
                        <p><strong>Size:</strong> ${shoe.size}</p>
                        <p><strong>Type:</strong> ${shoe.type}</p>
                    </div>
                </div>
                `
                page.appendChild(sneakerItem)
                }
            }
        })
    }

    
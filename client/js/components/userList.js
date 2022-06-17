function renderUsers() {
    const htmlContent = document.getElementById('content')

    axios.get('/api/users').then((resp) => {
        htmlContent.innerHTML = ''
        const title = document.createElement('h1')
        title.innerText = 'Our Members'
        htmlContent.appendChild(title)

        userData = resp.data
        userData.forEach(elm => {
            const userName = document.createElement('h3')
            userName.innerText = elm.name
            const userLocation = document.createElement('p')
            userLocation.innerText = 'Location: ' + elm.location
            const userSize = document.createElement('p')
            userSize.innerText = 'Ideal shoe size: ' + elm.ideal_size
            const userPhoto = document.createElement('img')
            userPhoto.src = elm.photo_path
            
            // htmlContent.appendChild(userName)
            htmlContent.append(userName, userPhoto, userLocation, userSize)
            // htmlContent.append(userName, userLocation, userSize, userPhoto)
        })

    })
}
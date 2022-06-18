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

            //delete user button
            const deleteUserButton = document.createElement('button')
            deleteUserButton.innerText = 'Delete User'
            deleteUserButton.addEventListener('click', () => {
                deleteUsers(elm.id)
            })

            htmlContent.append(userName, userPhoto, userLocation, userSize, deleteUserButton)
        })

    })
}

//add users is not required as this is achieved via a sign up form 'signup.js'

//function to delete users via their user id
function deleteUsers(id) {
    axios.delete(`/api/users/${id}`).then((resp) => {
        renderUsers()
    })
}
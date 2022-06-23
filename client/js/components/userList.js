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

            //admin functionality - delete and edit users
            //delete user button
            const deleteUserButton = document.createElement('button')
            deleteUserButton.innerText = 'Delete User'
            deleteUserButton.addEventListener('click', () => {
                deleteUsers(elm.id)
            })

            //edit user button (renders an edit user form)
            const editUserButton = document.createElement('button')
            editUserButton.innerText = 'Edit'
            editUserButton.addEventListener('click', () => {
                editUsers(elm.id)
            })

            htmlContent.append(userName, userPhoto, userLocation, userSize, deleteUserButton, editUserButton)
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

//edit users function to update email etc. (expect for password)
function editUsers(id) {
    const htmlContent = document.getElementById('content')
    const updateForm = document.createElement('form')
    updateForm.innerHTML = `
            <h1>Update User</h1>
        <form>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group col-md-12">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="name" name="name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="username" name="username" class="form-control" placeholder="Username">
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="location">Location (City)</label>
                <input type="location" name="location" class="form-control" placeholder="Location (City)">
                </div>
                <div class="form-group col-md-12">
                <label for="shoe_size">Shoe Size</label>
                <select type="shoe_size" name="shoe_size" class="form-control">
                    <option selected>Choose...</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                </select>
                </div>
                <div class="form-group col-md-12">
                <label for="photo_URL">Photo (url)</label>
                <input type="photo_URL" name="photo_URL" class="form-control">
                </div>
                <div class="form-group col-md-12">
                <label for="instagram_URL">Instagram (url)</label>
                <input type="instagram_URL" name="instagram_URL" class="form-control">
                </div>    
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
    </form> 
    `
    htmlContent.replaceChildren(updateForm)

    updateForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(updateForm)

        let email = formData.get('email')
        let name = formData.get('name')
        let username = formData.get('username')
        let shoeSize =formData.get('shoe_size')
        let location = formData.get('location')
        let photo = formData.get('photo_URL')
        let instagram = formData.get('instagram_URL')

        axios.put(`/api/users/${id}`, {
            email: email,
            name: name,
            username: username,
            size: shoeSize,
            loc: location,
            photo: photo,
            insta: instagram
        }).then((result) => {
            console.log(result)
            renderUsers()
        }).catch((error) => {
            console.log(error.response.data.message)
            const status = error.response.status
            const msg = document.createElement('p')
            if (status == 400) {
                msg.innerText = 'Please fill in all input fields when updating user'
               
            } else if (status == 500) {
                msg.innerText = 'Something went wrong with the server. Try again later'
            }
            htmlContent.appendChild(msg)
        })
    })

}

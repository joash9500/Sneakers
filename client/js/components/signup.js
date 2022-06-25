console.log('signup page is running')

function renderSignup() {
    console.log('signup page is rendering')

    const htmlContent = document.getElementById('content')
    const htmlContent2 = document.getElementById('side-bar')
    const form = document.createElement('form')
    form.classList.add("addsneaker")
    form.innerHTML = `
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
            <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    `

    htmlContent.replaceChildren(form)
    htmlContent2.replaceChildren()


    form.addEventListener('submit', (event) => {
        event.preventDefault() //prevents default pasting into URL when form is submitted

        const formData = new FormData(form) //copy data from form into formData
        let email = formData.get('email')
        let password = formData.get('password')
        let name = formData.get('name')
        let username = formData.get('username')
        let shoeSize =formData.get('shoe_size')
        let location = formData.get('location')
        let photo = formData.get('photo_URL')
        let instagram = formData.get('instagram_URL')

        axios.post('/api/users', {
            email: email,
            pass: password,
            name: name,
            username: username,
            size: shoeSize,
            loc: location,
            photo: photo,
            insta: instagram

        }).then(() => {
            const data = {
                email: email,
                password: password
            }
            axios.post('/api/session', data) //sign in the user after signing up
            .then((response) => {
                console.log(response)
                window.location = '/'
            })
            window.location ='/' //redirect

        }).catch((error) => {
            console.log(error.response.data.message)
            const msg = document.createElement('p')
            const status = error.response.status
            if (status == 400) {
                msg.innerText = 'Please fill in all fields in the sign up form'
                
            } else if (status == 500) {
                msg.innerText = 'There is an issue with our server. Please try again later'
            }
            htmlContent.appendChild(msg)
        })

    })

}
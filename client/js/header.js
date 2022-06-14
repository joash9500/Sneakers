function renderHeader() {
    const headerNode = document.getElementById('headerbar') //get html element for the header bar
    headerNode.innerHTML = `
    <ul id="navbar">
        <li onClick = "renderChallengeList()" id="challengeLink">Challenges</li>
        <li onClick = "rules()">Rules</li>
        <li onClick = "addChallenge()">Add Challenge</li>
    </ul>
    <div id="log-status">
        <a id="log-in" href="/login.html"><button>Login</button></a>
        <p id="user" style="display: none">Logged in as <span></span></p>
        <button id="log-out" style="display: none">Logout</button>
    </div>
    `
    let logoutButton = document.querySelector('#log-out')
    let loginButton = document.querySelector('#log-in')
    let username = document.querySelector('#user > span')
    let userStatus = document.querySelector('#user')
    
    axios.get('/api/session').then((res) => {
        if (res.data.name == undefined) {
            //do nothing. 'logged in as' stays hidden
        } else if (res.data != undefined) {
            userStatus.style.display = 'inline-block' //unhide 'logged in as'
            username.innerText = res.data.name //update the span tag
            logoutButton.style.display = 'inline-block'
            loginButton.style.display = 'none'
        } else {
            console.log('something weird happened with api session')
        }
    })
    let logout = document.querySelector('#log-out')
    logout.addEventListener('click', () => {
        axios.delete('/api/session').then(() => {
            console.log('logged out')
            renderHeader()
        })
    })
}
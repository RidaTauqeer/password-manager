const websiteInput = document.getElementById('website');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const addButton = document.getElementById('add');
const showButton = document.getElementById('show');
const passwordList = document.getElementById('password-list');

addButton.addEventListener('click', () => {
    const website = websiteInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (website && username && password) {
        // Basic storage (for demo purposes, replace with secure storage):
        localStorage.setItem(website, `${username}:${password}`);

        websiteInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
        alert('Password added successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

showButton.addEventListener('click', () => {
    passwordList.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const [username, password] = value.split(':');

        const passwordItem = document.createElement('div');
        passwordItem.classList.add('password-item');
        passwordItem.innerHTML = `
            <strong>Website:</strong> ${key}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Password:</strong> ${password}
            <button class="remove-item">Remove</button>
        `;
        passwordList.appendChild(passwordItem);

        const removeItemButton = passwordItem.querySelector('.remove-item');
        removeItemButton.addEventListener('click', () => {
            localStorage.removeItem(key);
            passwordItem.remove();
        });
    }
});
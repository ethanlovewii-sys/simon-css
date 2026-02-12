// placeholder for service calls

export function register(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    console.log('email:', email);
    console.log('password:', password);
    localStorage.setItem('users', JSON.stringify([...users, {email, password}]));
}

export function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
}
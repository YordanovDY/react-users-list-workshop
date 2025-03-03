const baseUrl = `http://localhost:3030/jsonstore/users`;

const userService = {
    getUsers
}

async function getUsers() {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const users = Object.values(result);
    return users;
}

export default userService;
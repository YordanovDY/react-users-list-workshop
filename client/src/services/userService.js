const baseUrl = `http://localhost:3030/jsonstore/users`;

const userService = {
    getUsers,
    getSingleUser,
    addUser,
}

async function getUsers() {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const users = Object.values(result);
    return users;
}

async function addUser(formValues) {
    const { _id,
        firstName,
        lastName,
        email,
        phoneNumber,
        imageUrl,
        ...address } = formValues;

    const userData = {
        _id,
        firstName,
        lastName,
        email,
        phoneNumber,
        imageUrl,
        address
    };

    userData['createdAt'] = new Date();
    userData['updatedAt'] = new Date();

    const response = await fetch(baseUrl, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
}

async function getSingleUser(userId) {
    const response = await fetch(baseUrl + `/${userId}`);
    const user = await response.json();
    return user;
}

export default userService;
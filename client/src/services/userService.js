const baseUrl = `http://localhost:3030/jsonstore/users`;

const userService = {
    getUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser
}

async function getUsers() {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const users = Object.values(result);
    return users;
}

async function addUser(formValues) {
    const userData = transformData(formValues);

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

async function deleteUser(userId) {
    const response = await fetch(baseUrl + `/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
}

async function updateUser(userId, formValues) {
    const userData = transformData(formValues, true);

    const response = await fetch(baseUrl + `/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
}

export default userService;

function transformData(formValues, isUpdateRequest = false) {
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

    if (!isUpdateRequest) {
        userData['createdAt'] = new Date();
    }

    userData['updatedAt'] = new Date();

    return userData;
}
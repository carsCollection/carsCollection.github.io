import * as api from './api.js'

const host = 'https://parseapi.back4app.com'
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

function createPointer(name, id) {
    return {
        __type: 'Pointer',
        classname: name,
        objectId: id
    }
}

function addOwner(object) {
    const userId = sessionStorage.getItem('userId');
    object.owner = createPointer('_User', userId)
}

export async function getCars() {
    return await api.get(host + '/classes/Car');
}

export async function getCarById(id) {
    return await api.get(host + '/classes/Car/' + id + '?include=owner');
}

export async function createCar(car) {
    addOwner(car)
    return await api.post(host + '/classes/Car', car);
}

export async function editCarById(id, car) {
    return await api.put(host + '/classes/Car/' + id, car)
}

export async function deleteRecipeById(id) {
    return await api.del(host + '/classes/Car/' + id);
}

// export async function getRecipeCount() {
//     return api.get(host + '/data/recipes?count');
// }

// export async function getRecent() {
//     return api.get(host + '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3');
// }




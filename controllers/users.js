
import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });

    res.send(`User dengan nama ${user.fist_name} telah di tambahkan ke database!`);
}

export const getDetail = (req, res) => {
    const {id} = req.params;
    const foundUsers =  users.find((user) => user.id === id);
    res.send(foundUsers);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User Dengan Id ${id} telah di hapus dari database!`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {fist_name , last_name, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (fist_name) {
        user.fist_name = fist_name;
    }
    if (last_name) {
        user.last_name = last_name;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User dengan id ${id} telah di update!`);

}
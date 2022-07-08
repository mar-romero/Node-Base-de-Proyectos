const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res) => {
     throw new Error('Error de Test de Handler')
    const users = [{
        id: 1,
        name: 'Marcelo'
    },
    {
        id: 2,
        name: 'Ezequiel'
    },]
    res.json(users)
};



/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res) => {
    const user = req.body;
    user.id = 1;
    const result = {
        message: "user created",
        user
    }
    res.json(result);
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res) => {
   
    const user = req.body;
    const { id } = req.params;
    user.id = id;
    const result = {
        message: "user update",
        user
    }
    res.json(result);
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {
    const { id } = req.params;

    const result = {
        message: `user id: ${id} delete`
    }
    res.json(result);
}




module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}
//rutas

const { Router } = require('express');

const router = Router();

const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user')

router.get('/',getAllUsers);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;

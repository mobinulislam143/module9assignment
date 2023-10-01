const express = require('express')
const router = express.Router()

const adminController = require('../Controllers/adminController')
router.get('/adminController/create', adminController.create)
router.get('/adminController/read', adminController.read)
router.get('/adminController/update', adminController.update)
router.get('/adminController/delete', adminController.delete)

const postController = require('../Controllers/postController')
router.get('/postController/create', postController.create)
router.get('/postController/read', postController.read)
router.get('/postController/update', postController.update)
router.get('/postController/delete', postController.delete)

const subAdminController = require('../Controllers/subAdminController')
router.get('/subAdminController/create', subAdminController.create)
router.get('/subAdminController/read', subAdminController.read)
router.get('/subAdminController/update', subAdminController.update)
router.get('/subAdminController/delete', subAdminController.delete)

const userController = require('../Controllers/userController')
router.get('/userController/create', userController.create)
router.get('/userController/read', userController.read)
router.get('/userController/update', userController.update)
router.get('/userController/delete', userController.delete)

module.exports = router
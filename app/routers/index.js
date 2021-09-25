const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}
//rutas dinamicas
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skipFiles = ['index'].includes(fileWithOutExt)
    if (!skipFiles) {
    
    console.log(fileWithOutExt)
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
    }

})

//rutas indefinidas
router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})
module.exports = router

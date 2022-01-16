const {getImages} = require('../images/images.controller')

const getImage = async (index) => {
    try {
        const photos = await getImages()
        const photo = photos[index]
        photo.index = parseInt(index)
        return photo
    } catch (err) {
        throw err
    }
}

module.exports = {
    getImage
}
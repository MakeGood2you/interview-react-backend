"use strict"

const dataQuery = require('./data-query');

const apiEndpoints = [
    'https://my-json-server.typicode.com/coing-dev/photo-api/images',
    'https://my-json-server.typicode.com/coing-dev/photo-api/photos'
]

const getImages = async () => {

    try {
        const photosAndImagesObj = await dataQuery.getDataByUrls(apiEndpoints)

        const images = fixedLinksOfImagesList(photosAndImagesObj.images)
        const photos = fixedLinksOfPhotosList(photosAndImagesObj.photos)

        Array.prototype.push.apply(photos, images)

        return photos
    } catch (err) {
        throw err
    }
}
const fixedLinksOfPhotosList = (photosData) => {
    for (const photoData of photosData) {

        const splitUrl = photoData.url.split('/')
        const splitThumbUrl = photoData.thumbnailUrl.split('/')

        if (!splitThumbUrl.includes('150')) photoData.thumbnailUrl = createNewLink(splitThumbUrl, '150')

        if (!splitUrl.includes('600')) photoData.url = createNewLink(splitThumbUrl, '600')
    }
    return photosData
}

const fixedLinksOfImagesList = (imagesData, key = 'path') => {
    imagesData.map(imageData => {
            const splitPath = imageData[key].split('/')

            !splitPath.includes('150')
                ? imageData.thumbnailUrl = createNewLink(splitPath, '150')
                : imageData.thumbnailUrl = imageData[key]


            !splitPath.includes('600')
                ? imageData.url = createNewLink(splitPath, '600')
                : imageData.url = imageData[key]

            delete imageData.path
        }
    )
    return imagesData
}


const createNewLink = (splitPath, value) => {
    const splitPathCopy = [...splitPath]
    splitPathCopy.splice(splitPathCopy.length - 1, 0, value)
    return splitPathCopy.join('/')
}

module.exports = {
    getImages
};

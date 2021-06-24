//action creators - define the actions of the whole app

export const fetchImage = () => {
    return {type: 'FETCHED_IMAGE'}
}

const requestImage = () => {
    return {type:'REQUESTED_IMAGE'}
}

const requestImageSuccess = () => {
    return {type: 'REQUESTED_IMAGE_SUCCESS'}
}

const requestImageError = () => {
    return {type: 'REQUESTED_IMAGE_ERROR'}
}

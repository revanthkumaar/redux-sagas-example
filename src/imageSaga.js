const {takeEvery, put, call} = ReduxSaga.effects;

//watch for the dispatch of 'fetched_image'
//once that is triggered call another function fetchAsync()

function* watchFetchImage(){
    yield takeEvery('FETCHED_IMAGE',fetchImageAsync())
}

//SAGA TO RETRIEVE AN IMAGE 
function* fetchImageAsync(){
    try{
        yield put(requestImage()); //show the loader
        const data = yield call(() => { //making the API call
            return fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
        });
        yield put(requestImageSuccess(data));//SUCCESS - MAKE DATA GET DISPLAYED ON UI

    }
    catch(error){ 
            yield put(requestImageError()) //SHOW THAT THERE IS AN ERROR
    }

}
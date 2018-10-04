import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=af205e61bec78a460503dbf39412d2ad"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    console.log('response.data: ', response.data)
    
    const weather = response.data.name;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", weather });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
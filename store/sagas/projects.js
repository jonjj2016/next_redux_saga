import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { types, actions } from '../actions/project';


function* on_find_projects() {
    const params = {}
    try {
        console.log('here',4545454)
      const {data} = yield axios.get('http://localhost:3003/v2/projects');
      yield put(actions.loading());
      const token = yield localStorage.getItem('Ftoken');
      console.log('token', token)
      yield put(actions.find_success(data.data));
    } catch (err) {
      yield put(actions.find_failed(err));
    }
}


function* find_projects() {
    yield takeLatest(types.FIND_START, on_find_projects);
}
// ///////////////////////////////////////////////////////////////////////////

function* on_get_project({payload}) {
    const id = payload;
    const params = {
        populate: JSON.stringify(['projectType'])
    }
    const api = `http://localhost:3003/v2/projects/${payload}`;
    console.log(api)

    try {
    const {data} = yield axios.get(api);
    yield put(actions.loading());
    yield put(actions.get_success(data.data));
    } catch (err) {
    yield put(actions.get_failed(err));
    }
}

function* get_project() {
    yield takeLatest(types.GET_START, on_get_project);
}
export default function* () {
    yield all([call(find_projects), call(get_project)]);
  }
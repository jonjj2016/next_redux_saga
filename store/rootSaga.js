import { all, call } from 'redux-saga/effects';
import projectSagas from './sagas/projects'

export default function* () {
  yield all([call(projectSagas)]);
}
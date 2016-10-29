import { put, take, call, select, fork } from 'redux-saga/effects'

import { fetchContents, nextQuestion, finishDescription } from './actions'

function* fetchContentsSaga() {
  while (true) {
    yield take(`${fetchContents}`)
    yield call(sendData, 'fetch contents')
  }
}

function* finishDescriptionSaga() {
  while (true) {
    yield take(`${finishDescription}`)
    yield call(sendData, 'finish description')
  }
}

let count = 0

function* nextQuestionSaga() {
  const sequences = ["question1", "question2", "answered"]
  while(true){
    const { payload: { selected } } = yield take(`${nextQuestion}`)
    const sequence = yield select(({ sequence }) => sequence)
    count++
    console.log("_________saga_count_before:%s",sequences[count])
    let next = sequences[count]
    console.log("_________saga_count_after :%s",sequences[count])


    if(next == "question2"){
      yield call(sendData, 'next question 2', {selected: selected, next: next})
      console.log("saGa & %s",next)
    }
    if(next == "answered"){
      yield call(sendData, 'next question ans', {selected: selected, next: next})
      console.log("saGa & %s",next)
    }

  }
}

function* saga() {
  yield fork(fetchContentsSaga)
  yield fork(nextQuestionSaga)
  yield fork(finishDescriptionSaga)
}

export default saga

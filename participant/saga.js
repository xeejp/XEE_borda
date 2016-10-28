import { put, take, call, select, fork } from 'redux-saga/effects'

import { fetchContents, nextQuestion } from './actions'

function* fetchContentsSaga() {
  while (true) {
    yield take(`${fetchContents}`)
    yield call(sendData, 'fetch contents')
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
    


    yield call(sendData, 'next question', {selected: selected, next: next})
    console.log("saGa & %s",next)
  }
}

function* saga() {
  yield fork(fetchContentsSaga)
  yield fork(nextQuestionSaga)
}

export default saga

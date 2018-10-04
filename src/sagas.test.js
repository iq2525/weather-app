import { watcherSaga, workerSaga } from './sagas'

//TODO - Need to add Saga tests

it('redux saga test', () => {
  const test = workerSaga()
  const test2 = test.next()
  console.log('test2: ', test2)

  const test3 = test.next()
  console.log('test3: ', test3)
  console.log('test3: ', test3.value.PUT)

  console.log('test')
});
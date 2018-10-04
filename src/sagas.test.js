import { watcherSaga, workerSaga } from './sagas'

//TODO - Need to add Saga tests

it.skip('redux saga test', () => {
  const test = workerSaga()
  const test2 = test.next()
  const test3 = test.next()
});

describe('redux saga tests', () => {
  it.skip('redux saga test', () => {
    const test = workerSaga()
    const test2 = test.next()
    const test3 = test.next()
  });
});
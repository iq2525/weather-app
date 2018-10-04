import { reducer } from './redux';

describe('redux', () => {
  it('handles API_CALL_REQUEST', () => {
    const newState = reducer(null, {type: 'API_CALL_REQUEST'})
    expect(newState).toEqual({fetching: true, error: null})
  });

  it('handles API_CALL_SUCCESS', () => {
    const newState = reducer(null, {type: 'API_CALL_SUCCESS', weather: 'test'})
    expect(newState).toEqual({fetching: false, weather: 'test'})
  });

  it('handles API_CALL_FAILURE', () => {
    const newState = reducer(null, {type: 'API_CALL_FAILURE', weather: null, error: 'error'})
    expect(newState).toEqual({fetching: false, weather: null, error: 'error'})
  });
});

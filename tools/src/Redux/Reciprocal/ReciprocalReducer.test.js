import reducer from './ReciprocalReducer'
import { calculateReciprocal, INITIAL_STATE } from './ReciprocalReducer'

describe('ReciprocalReducer', () => {
  test('should load reducer with initial state', () => {
    const state = reducer(undefined, { type: 'UNKNOWN_ACTION' })
    expect(state).toEqual(INITIAL_STATE)
  })
  describe('Action: calculateReciprocal', () => {
    test('should calculate the courses correctly if the heading is 360', () => {
      const state = reducer(undefined, calculateReciprocal('360'))
      expect(state.nose.course).toEqual(360)
      expect(state.rightWing.course).toEqual(90)
      expect(state.tail.course).toEqual(180)
      expect(state.leftWing.course).toEqual(270)
    })
    test('should calculate the courses correctly if the heading is 180', () => {
      const state = reducer(undefined, calculateReciprocal('180'))
      expect(state.nose.course).toEqual(180)
      expect(state.rightWing.course).toEqual(270)
      expect(state.tail.course).toEqual(360)
      expect(state.leftWing.course).toEqual(90)
    })
  })
})

import { createAction, handleActions } from 'redux-actions'

const normalizeCourse = course => {
  const val = Math.floor(course)
  if (val === 0) return 360
  if (val === 361) return 1
  if (val === -1) return 359
  if (val < -1) return 360
  if (val > 361) return 360
  return val
}
const lessThan180 = course => course >= 0 && course < 180
const rightWing = course => (course + 90 < 360 ? course + 90 : course - 270)
const leftWing = course => (course - 90 > 0 ? course - 90 : course + 270)
const tail = course => (lessThan180(course) ? course + 180 : course - 180)
const cardinal = c => {
  if (N(c)) return 'N'
  if (NNE(c)) return 'NNE'
  if (NE(c)) return 'NE'
  if (ENE(c)) return 'ENE'
  if (E(c)) return 'E'
  if (ESE(c)) return 'ESE'
  if (SE(c)) return 'SE'
  if (SSE(c)) return 'SSE'
  if (S(c)) return 'S'
  if (N(c)) return 'N'
  if (SSW(c)) return 'SSW'
  if (SW(c)) return 'SW'
  if (WSW(c)) return 'WSW'
  if (W(c)) return 'W'
  if (WNW(c)) return 'WNW'
  if (NW(c)) return 'NW'
  if (NNW(c)) return 'NNW'
}

const N = course => (course >= 0 && course < 11.25) || (course < 360 && course > 348.75)
const NNE = course => course > 11.25 && course < 32.75
const NE = course => course > 32.75 && course < 56.25
const ENE = course => course > 56.25 && course < 78.75
const E = course => course > 78.75 && course < 101.25
const ESE = course => course > 101.25 && course < 123.75
const SE = course => course > 123.75 && course < 146.25
const SSE = course => course > 146.25 && course < 168.75
const S = course => course > 168.75 && course < 191.25
const SSW = course => course > 191.25 && course < 213.75
const SW = course => course > 213.75 && course < 236.25
const WSW = course => course > 236.25 && course < 258.75
const W = course => course > 258.75 && course < 281.25
const WNW = course => course > 281.25 && course < 303.75
const NW = course => course > 303.75 && course < 320.25
const NNW = course => course > 326.25 && course < 348.75

export const types = {
  calculateReciprocal: 'CALCULATE_RECIPROCAL',
}

export const calculateReciprocal = createAction(types.calculateReciprocal)

export const INITIAL_STATE = {
  nose: {
    course: 360,
    cardinal: 'N',
  },
  rightWing: {
    course: 90,
    cardinal: 'E',
  },
  tail: {
    course: 180,
    cardinal: 'S',
  },
  leftWing: {
    course: 270,
    cardinal: 'W',
  },
}

export default handleActions(
  {
    [types.calculateReciprocal]: (state, { payload: { value } }) => {
      const normalized = normalizeCourse(value)
      console.log(normalized)
      return {
        ...state,
        nose: {
          course: normalized,
          cardinal: cardinal(normalized),
        },
        rightWing: {
          course: rightWing(normalized),
          cardinal: cardinal(rightWing(normalized)),
        },
        tail: {
          course: tail(normalized),
          cardinal: cardinal(tail(normalized)),
        },
        leftWing: {
          course: normalizeCourse(leftWing(normalized)),
          cardinal: cardinal(leftWing(normalized)),
        },
      }
    },
  },
  INITIAL_STATE
)

import authReducer from '../../reducers/auth'

test('Should set default state' , () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should change state to Login', () => {
    const uid = '1234'
    const state = authReducer(undefined, {
        type: "LOGIN",
        uid
      })
    expect(state.uid).toBe(uid)
})


test('should change state to LOGOUT', () => {
    const action = 
        {
            type: "LOGOUT"
          }
    
    const state = authReducer({uid: 'anything'}, action)
    expect(state).toEqual({})
})

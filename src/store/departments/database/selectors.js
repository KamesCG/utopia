export const initialState = {}
export const getDeltaPath = (state,delta, path) => (state[delta] && state[delta][path]) || null
export const getDeltaData = (state,delta) => (state[delta] && state[delta].data) || null
export const getDeltaStatus = (state,delta) => (state[delta] && state[delta].status) || null
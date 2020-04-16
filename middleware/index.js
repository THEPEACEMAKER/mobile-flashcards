import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

// Middleware intercepts a dispatched action before it reaches the reducer.
// You can only add middleware when you initially create the store:

export default applyMiddleware(
	// The middleware is called in the order it is listed in this function.
  thunk,
  logger,
)

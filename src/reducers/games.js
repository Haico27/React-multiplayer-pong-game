import { CREATE_GAME } from '../actions/games/create'
import { FETCHED_GAMES } from '../actions/games/fetch'


export default ( state = [], { type, payload } = {} ) => {
  switch(type) {
    case CREATE_GAME :
      return [Object.assign({}, payload)].concat(state)

    case FETCHED_GAMES :
      return [].concat(payload)

    default :
      return state
  }
}

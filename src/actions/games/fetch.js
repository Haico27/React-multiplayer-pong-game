import API from '../../api'
import loading from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()

const games = api.service('games') //sets up the games from the api

export default () => {
  return fetchGames
}

const fetchGames = (dispatch) => {
  dispatch(loading(true))

  setTimeout(() => {
    games.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_GAMES,
        payload: result.data
      })
    })
    .catch((error) => {
      console.error('Could not fetch the games from the api!', error)
    })
    .then(() => {
      dispatch(loading(false))
    })
  }, 3000)

}

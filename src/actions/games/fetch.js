import API from '../../api'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('games')
    backend.find()
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
  }
}

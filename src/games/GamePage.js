import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'

export class GamePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()
  }

  render() {
    const { title } = this.props

    return(
      <div className="game page">
        <Title content={ title } />
      </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if ( next._id === params.gameId ) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames })(GamePage)

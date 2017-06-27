import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import GameItem from './GameItem'
import GameEditor from './GameEditor'
import { connect } from 'react-redux'
import './GamesContainer.css'
import fetchGames from '../actions/games/fetch'

class GamesContainer extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="Pong Games" />
          <GameEditor title="" />
        </header>
        <main>
          { this.props.games.map(this.renderGame) }
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({
  games
})

export default connect(mapStateToProps, { fetchGames })(GamesContainer)

import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameItem from './GameItem'
import GameEditor from './GameEditor'
import { connect } from 'react-redux'
import './GamesContainer.css'

class GamesContainer extends PureComponent {
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

export default connect(mapStateToProps)(GamesContainer)

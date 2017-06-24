import React, { PureComponent } from 'react'
import Title from '../components/Title'
import GameItem from './GameItem'
import './GamesContainer.sass'

class GamesContainer extends PureComponent {
  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="Pong Games" />
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

export default GamesContainer

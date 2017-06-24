import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Scoreboard from '../components/Scoreboard'
import PongTable from '../components/PongTable'
import './GameItem.css'

class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }

  render() {
    const { title, player1, player2, score } = this.props
    return(
      <article className="game">
        <h1>{ title }</h1>
        <div className="scoreBoard">
          <Scoreboard
            player1={ player1 }
            player2={ player2 }
            score={ score }
          />
        </div>
        <div className="pongTable">
          <PongTable />
        </div>
      </article>
    )
  }
}

export default GameItem

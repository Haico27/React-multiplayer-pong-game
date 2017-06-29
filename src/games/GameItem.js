import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
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
    const { _id, title, player1, player2, score } = this.props
    return(
      <article className="game">
        <h1>
          <Link to={`/games/${_id}`}>{ title }</Link>
        </h1>
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

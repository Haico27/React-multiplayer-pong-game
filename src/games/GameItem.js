import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class GameItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }

  render() {
    const { title, player1, player2 } = this.props
    return(
      <article className="game">
          <h1>{ title }</h1>
        <div>
          <h2> { player1 } vs { player2 } </h2>
        </div>
      </article>
    )
  }
}

export default GameItem

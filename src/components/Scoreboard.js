import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Scoreboard.css'

class Scoreboard extends PureComponent {

  render() {
    const { player1, player2, score } = this.props

    return(
      <div className="scoreboard">
        <div className="players">
          <h2>{ player1 } vs { player2 }</h2>
          <h2>{ score } : { score }</h2>
        </div>
      </div>
    )
  }
}

export default Scoreboard

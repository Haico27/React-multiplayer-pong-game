import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './GameEditor.css'
import createGame from '../actions/games/create'

class GameEditor extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title,
      errors: {}

    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value,
    })
  }

  validate(game) {
    const { title } = game

    let errors = {}

    if (!title || title === '') errors.title = 'We need a title...!'

    this.setState({
      errors,
    })

    return Object.keys(errors).length === 0
  }

  saveGame() {
    const {
      title,
    } = this.state

    const game = {
      title,
    }

    if (this.validate(game)) {
      this.props.createGame(game)
      console.log(game)
    }
    this.refs.title.value = ''


  }

  render() {
    const { errors } = this.state

    return(
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={ this.state.title }
          onChange={ this.updateTitle.bind(this)}
          onKeyDown={ this.updateTitle.bind(this)} />

          { errors.title && <p className="error">{ errors.title }</p> }

        <div className="actions">
          <button className="primary" onClick={ this.saveGame.bind(this)}>Create new game</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createGame })(GameEditor)

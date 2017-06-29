import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingIcon from '../images/Loading_icon.gif'
import './Loading.sass'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { loading } = this.props

    if ( !loading ) return null

    return(
      <div className= "loading">
        <img src= { LoadingIcon } alt="loading" />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading }) //refers to the reducer

export default connect(mapStateToProps)(Loading)

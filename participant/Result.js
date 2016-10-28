import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'

class Result extends Component{
  render(){
    return(
      <p>participant/Result.js now</p>
    )
  }
}

export default connect()(Result)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import { Card, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'


const mapStateToProps = ({sequence, question1, question2 }) => ({
  sequence, question1, question2 
})

class EndQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { sequence, question1, question2, result } = this.props
  return (
      <Card><CardText>
          <div style={{height: 'auto'}}>
            <div style={{overflow: 'hidden'}}>
              <p>実験終了</p>
              <p>result:{JSON.stringify(result)}</p>

            </div>
          </div>
      </CardText></Card>
    )
  }
}

export default connect(mapStateToProps)(EndQuestion)

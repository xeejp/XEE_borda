import React, { Component } from 'react'
import { connect } from 'react-redux'

import { nextQuestion } from './actions'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import { Card, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import Experiment1 from './Experiment1'
import Experiment2 from './Experiment2'
import Experiment3 from './Experiment3'

const mapStateToProps = ({}) => ({
})

const actionCreators = {
  nextQuestion,
}

let ex="experiment1"
let result = new Object()
let manyTypeDataCall = 0
let game = new Array()
const dt = [1,2]

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.moveEx = this.moveEx.bind(this);
    this.manyTypeData = this.manyTypeData.bind(this);
  }

  moveEx(value){
    ex = value
    this.setState(dt)
  }

  manyTypeData(fromData, dtArray){
    result[fromData] = dtArray 

    if(fromData == "game"){
      game = JSON.parse(JSON.stringify(dtArray))
    }

    if(fromData == "5axis"){
      this.props.nextQuestion(JSON.parse(JSON.stringify(game.concat(dtArray))))
      ex = "experiment3"
      this.setState(dt)
    }
    
    if(fromData == "dnd"){
      this.props.nextQuestion(JSON.parse(JSON.stringify(dtArray)))
    }

  }

  render() {
    switch (ex){
      case "experiment1":
        return(
          <div>
            <Experiment1 
              moveEx={this.moveEx}
              manyTypeData = {this.manyTypeData}
            />
          </div>
        )
      case "experiment2":
        return(
          <Experiment2 
            moveEx={this.moveEx}
            manyTypeData = {this.manyTypeData}
          />
        )
      case "experiment3":
        return(
          <Experiment3 
            moveEx={this.moveEx}
            manyTypeData = {this.manyTypeData}
            result={result}
          />
        )
      default:
        return <span></span>
    }
  }
}

export default connect(mapStateToProps, actionCreators)(Experiment)

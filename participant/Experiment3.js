import React, { Component } from 'react'
import { connect } from 'react-redux'

import SwipeableViews from 'react-swipeable-views'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import DnD from './DnD'
import EndQuestion from './EndQuestion'
import EvaluationAxis from 'util/EvaluationAxis'
import Subjects from 'util/Subjects'


const mapStateToProps = ({}) => ({
})

let DnDResult = new Array()
let arrayResult    = new Array()
let Num = 0
let ResultCounter = 0
const SUBJECT_LENGTH = 3

class Experiment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.dataBarn = this.dataBarn.bind(this)
  }
  dataBarn(array) {
    DnDResult[Num] = new Array()
    DnDResult[Num] = JSON.parse(JSON.stringify(array))
    if(Num < EvaluationAxis.length + 1 ){
      this.setState(DnDResult)
    }
    if(Num == EvaluationAxis.length){
      for(let i=0; i<=EvaluationAxis.length; i++){
        if(i < EvaluationAxis.length){
          for(let d=0; d<SUBJECT_LENGTH; d++){
            arrayResult[ResultCounter] = DnDResult[i][d][1]
            ResultCounter++
          }
        }
        if(i == EvaluationAxis.length){
          for(let l=0; l<EvaluationAxis.length; l++){
            arrayResult[ResultCounter] = DnDResult[i][l][1]
            ResultCounter++
          }
        }
      }
    }
    Num++
  }

  render() {
    const { moveEx , manyTypeData } = this.props

    return(
      <div>
        <Card>
          {Num <= EvaluationAxis.length ?
            <DnD 
              Num = {Num}
              dataBarn= {this.dataBarn}
            />
            :<EndQuestion 
              arrayResult={arrayResult}
              manyTypeData = {manyTypeData}
            />
          }
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Experiment2)


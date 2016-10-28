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
let Num = 0

class Experiment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.dataBarn = this.dataBarn.bind(this)
  }
  dataBarn(array) {
    DnDResult[Num] = new Array()
    DnDResult[Num] = array
    if(Num < EvaluationAxis.length + 1 ){
      this.setState(DnDResult)
    }
    if(Num == EvaluationAxis.length){
      let result    = new Object()
      const { manyTypeData } = this.props

      for(let i=0; i<=EvaluationAxis.length; i++){
        result[i] = new Object()
        if(i < EvaluationAxis.length){
          for(let d=0; d<Subjects.length; d++){
            result[i][d] = DnDResult[i][d][1]
          }
        }
        if(i == EvaluationAxis.length){
          for(let l=0; l<EvaluationAxis.length; l++){
            result[i][l] = DnDResult[i][l][1]
          }
        }
      }
      manyTypeData("dnd",result)
      console.log("result in:%s",JSON.stringify(result,null,'\t'))
    }
    Num++
    console.log("DnDResult : %s",JSON.stringify( DnDResult))
  }

  render() {
    const { moveEx ,result } = this.props

    return(
      <div>
        <Card>
          {Num <= EvaluationAxis.length ?
            <DnD 
              Num = {Num}
              dataBarn= {this.dataBarn}
            />
            : <EndQuestion 
              result={result}
            />
          }
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Experiment2)


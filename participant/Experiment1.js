import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import {Card, CardText, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider'


const mapStateToProps = ({}) => ({
})

const buttonStyle = {
  width: '20%',
  height: '100px',
  position: 'relative',
  margin: '2%',
}

const txtStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  margin: '-1.5em 0 0 -50%',
}

let buttonValueP = [3,6,9]
let buttonValueQ = [1,2,3]
let isClickA1 = false
let isClickB1 = false
let isClickA2 = false
let isClickB2 = false
let isClickA3 = false
let isClickB3 = false
let disabledA = false
let disabledB = false

class Experiment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p:0,
      q:0,
    }
    for(let i=buttonValueP.length-1; i>0; i--){
      let r = Math.floor(Math.random() * (i + 1))
      let tmp = buttonValueP[i]
      buttonValueP[i] = buttonValueP[r];
      buttonValueP[r] = tmp;
    }
    for(let i=buttonValueQ.length-1; i>0; i--){
      let r = Math.floor(Math.random() * (i + 1))
      let tmp = buttonValueQ[i]
      buttonValueQ[i] = buttonValueQ[r];
      buttonValueQ[r] = tmp;
    }
    console.log(JSON.stringify(buttonValueP))
    console.log(JSON.stringify(buttonValueQ))
  }

  ansP(value, whichButton){
    if(whichButton == "A1"){
      disabledA = true
      isClickA1 = true
    }
    if(whichButton == "A2"){
      disabledA = true
      isClickA2 = true
    }
    if(whichButton == "A3"){
      disabledA = true
      isClickA3 = true
    }
    this.setState({p: value})
  }

  ansQ(value, whichButton){
    if(whichButton == "B1"){
      disabledB = true
      isClickB1 = true
    }
    if(whichButton == "B2"){
      disabledB = true
      isClickB2 = true
    }
    if(whichButton == "B3"){
      disabledB = true
      isClickB3 = true
    }
    this.setState({q: value})
  }

  render() {
    const { moveEx } = this.props
    return (
      <Card>
        <CardTitle title="ボルダルール実験" subtitle="目指せ！最高得点！" />
        <CardText>

          <Card style={{float:'left'}}>
            <div style={{textAlign:'center'}}>
              <RaisedButton backgroundColor="white" style={{ ...buttonStyle}} disabled={true}>
                <div style={{ ...txtStyle }}>
                  <h6>Aグループ</h6>
                </div>
              </RaisedButton>

              <RaisedButton backgroundColor="white" style={{ ...buttonStyle}} disabled={true}>
                <div style={{ ...txtStyle }}>
                  <h6>Bグループ</h6>
                </div>
              </RaisedButton>
            </div>
          </Card>

          <Card style={{float:'left'}}>
            <div style={{textAlign:'center'}}>
              <RaisedButton disabledBackgroundColor={isClickA1 ?"#F44336":"white"} disabled={disabledA} onClick={this.ansP.bind(this,buttonValueP[0], "A1")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>A1</h5>
                </div>
              </RaisedButton>

              <RaisedButton disabledBackgroundColor={isClickB1 ?"#F44336":"white"} disabled={disabledB} onClick={this.ansQ.bind(this,buttonValueQ[0], "B1")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>B1</h5>
                </div>
              </RaisedButton>
            </div>
          </Card>

          <Card style={{float:'left'}}>
            <div style={{textAlign:'center'}}>
              <RaisedButton disabledBackgroundColor={isClickA2 ?"#F44336":"white"} disabled={disabledA} onClick={this.ansP.bind(this,buttonValueP[1], "A2")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>A2</h5>
                </div>
              </RaisedButton>

              <RaisedButton disabledBackgroundColor={isClickB2 ?"#F44336":"white"} disabled={disabledB} onClick={this.ansQ.bind(this,buttonValueQ[1], "B2")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>B2</h5>
                </div>
              </RaisedButton>
            </div>
          </Card>

          <Card style={{float:'left'}}>
            <div style={{textAlign:'center'}}>
              <RaisedButton disabledBackgroundColor={isClickA3 ?"#F44336":"white"} disabled={disabledA} onClick={this.ansP.bind(this,buttonValueP[2], "A3")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>A3</h5>
                </div>
              </RaisedButton>
              <RaisedButton disabledBackgroundColor={isClickB3 ?"#F44336":"white"} disabled={disabledB}  onClick={this.ansQ.bind(this,buttonValueQ[2], "B3")} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>B3</h5>
                </div>
              </RaisedButton>
            </div>
          </Card>

          <div style={{clear:'both'}}>
            <h3 style={{float:'left',}}>得点</h3>
            <h3 style={{float:'left',}}> : {this.state.p+this.state.q}</h3>
            <RaisedButton onClick={moveEx.bind(this,"experiment2")} style={{ float:'right', margin:'5%'}}>次へ</RaisedButton>
            <p style={{clear:'both'}}></p>
          </div>
      </CardText></Card>
    )
  }
}

export default connect(mapStateToProps)(Experiment1)

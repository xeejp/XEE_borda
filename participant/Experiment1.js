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


class Experiment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p:0,
      q:0,
    }
  }

  ansP(value){
    this.setState({p: value*3})
  }

  ansQ(value){
    this.setState({q: value*1})
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
              <RaisedButton backgroundColor="white" onClick={this.ansP.bind(this,1)} style={{ ...buttonStyle}}>
                <div style={{ ...txtStyle }}>
                  <h5>A1</h5>
                </div>
              </RaisedButton>

              <RaisedButton backgroundColor="white" onClick={this.ansQ.bind(this,1)} style={{ ...buttonStyle }}>
                <div style={{ ...txtStyle }}>
                  <h5>B1</h5>
                </div>
              </RaisedButton>
          </div>
            </Card>

            <Card style={{float:'left'}}>
          <div style={{textAlign:'center'}}>
              <RaisedButton backgroundColor="white" onClick={this.ansP.bind(this,2)} style={{ ...buttonStyle }}>
                <div style={{ ...txtStyle }}>
                  <h5>A2</h5>
                </div>
              </RaisedButton>

              <RaisedButton backgroundColor="white" onClick={this.ansQ.bind(this,2)} style={{ ...buttonStyle }}>
                <div style={{ ...txtStyle }}>
                  <h5>B2</h5>
                </div>
              </RaisedButton>
          </div>
            </Card>

            <Card style={{float:'left'}}>
          <div style={{textAlign:'center'}}>
              <RaisedButton backgroundColor="white" onClick={this.ansP.bind(this,3)} style={{ ...buttonStyle }}>
                <div style={{ ...txtStyle }}>
                  <h5>A3</h5>
                </div>
              </RaisedButton>
              <RaisedButton backgroundColor="white" onClick={this.ansQ.bind(this,3)} style={{ ...buttonStyle }}>
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

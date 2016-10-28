import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import {Card, CardText, CardTitle } from 'material-ui/Card'
import Divider from 'material-ui/Divider'


const mapStateToProps = ({}) => ({
})

const buttonStyle = {
  width: '30%',
  height: '100px',
  position: 'relative',
  margin: '1%',
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
          <div style={{height: 'auto'}}>
            <div style={{overflow: 'hidden'}}>
              <div>

                <RaisedButton backgroundColor="#64FFDA" onClick={this.ansP.bind(this,1)} style={{ ...buttonStyle}}>
                  <div style={{ ...txtStyle }}>
                    <h5>A</h5>
                  </div>
                </RaisedButton>

                <RaisedButton backgroundColor="#64FFDA" onClick={this.ansP.bind(this,2)} style={{ ...buttonStyle }}>
                  <div style={{ ...txtStyle }}>
                    <h5>B</h5>
                  </div>
                </RaisedButton>

                <RaisedButton backgroundColor="#64FFDA" onClick={this.ansP.bind(this,3)} style={{ ...buttonStyle }}>
                  <div style={{ ...txtStyle }}>
                    <h5>C</h5>
                  </div>
                </RaisedButton>
              </div>

              <div>
                <RaisedButton backgroundColor="#76FF03" onClick={this.ansQ.bind(this,1)} style={{ ...buttonStyle }}>
                  <div style={{ ...txtStyle }}>
                    <h5>A</h5>
                  </div>
                </RaisedButton>

                <RaisedButton backgroundColor="#76FF03" onClick={this.ansQ.bind(this,2)} style={{ ...buttonStyle }}>
                  <div style={{ ...txtStyle }}>
                    <h5>B</h5>
                  </div>
                </RaisedButton>

                <RaisedButton backgroundColor="#76FF03" onClick={this.ansQ.bind(this,3)} style={{ ...buttonStyle }}>
                  <div style={{ ...txtStyle }}>
                    <h5>C</h5>
                  </div>
                </RaisedButton>
              </div>
            </div>
          </div>
          <Divider
            style={{
              marginTop: "5%",
              marginBottom: "5%"
            }}
          />
          <div style={{}}>
            <h3 style={{float:'left',}}>得点:</h3>
            <h3 style={{float:'left', color: '#64FFDA'}}>{this.state.p}</h3>
            <h3 style={{float:'left',}}>+</h3>
            <h3 style={{float:'left', color: '#76FF03'}}>{this.state.q}</h3>
            <h3 style={{float:'left',}}> = {this.state.p+this.state.q}</h3>
            <RaisedButton onClick={moveEx.bind(this,"experiment2")} style={{ float:'right', top:'100%'}}>次へ</RaisedButton>
            <p style={{clear:'both'}}></p>
          </div>
      </CardText></Card>
    )
  }
}

export default connect(mapStateToProps)(Experiment1)

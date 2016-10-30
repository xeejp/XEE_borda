import React, { Component } from 'react'
import { connect } from 'react-redux'

import SwipeableViews from 'react-swipeable-views'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText, CardTitle } from 'material-ui/Card'
import Slider from 'material-ui/Slider'

const mapStateToProps = ({joinedNumber}) => ({
  joinedNumber
})

let slideResult = [0,0,0,0,0,0]
let moveSlider1 = false
let moveSlider2 = false
let moveSlider3 = false
let moveSlider4 = false
let moveSlider5 = false
let moveSlider6 = false

class Experiment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue1:0,
      sliderValue2:0,
      sliderValue3:0,
      sliderValue4:0,
      sliderValue5:0,
      sliderValue6:0,
      slideIndex: 0,
    }
  }

  handleSlider1 = (event, value) => {
    moveSlider1 = true;
    this.setState({sliderValue1: value});
  }

  handleSlider2 = (event, value) => {
    moveSlider2 = true;
    this.setState({sliderValue2: value});
  }

  handleSlider3 = (event, value) => {
    moveSlider3 = true;
    this.setState({sliderValue3: value});
  }

  handleSlider4 = (event, value) => {
    moveSlider4 = true;
    this.setState({sliderValue4: value});
  }

  handleSlider5 = (event, value) => {
    moveSlider5 = true;
    this.setState({sliderValue5: value});
  }

  handleSlider6 = (event, value) => {
    moveSlider6 = true;
    this.setState({sliderValue6: value});
  }

  handleNext() {
    this.setState({
      slideIndex: this.state.slideIndex + 1,
    })
  }

  handleBack() {
    this.setState({
      slideIndex: this.state.slideIndex - 1,
    })
  }

  finish(pa, pb, pc, qa, qb, qc){
    slideResult[0]=pa
    slideResult[1]=pb
    slideResult[2]=pc
    slideResult[3]=qa
    slideResult[4]=qb
    slideResult[5]=qc

    const { manyTypeData } = this.props
    manyTypeData("5axis", JSON.parse(JSON.stringify(slideResult)))
  }

  render() {
    const { moveEx ,joinedNumber} = this.props

    return(
      <div>
        <Card>
          <CardTitle title="ボルダルール実験" subtitle="5段階評価" />
          <div  style={{ padding:"5%"}}>
            <Card>
              <SwipeableViews
                index={this.state.slideIndex}
              >
                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>1/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                    defaultValue={moveSlider1?slideResult[0]:((joinedNumber+1)%2 == 0)?6:0} 
                    onChange={this.handleSlider1}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンA1がポイントに与える影響力は５段階評価で{this.state.sliderValue1}</h4>
                  </div>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>2/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                    defaultValue={moveSlider2?slideResult[1]:((joinedNumber+1)%2 == 0)?6:0}  
                    onChange={this.handleSlider2}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンA2がポイントに与える影響力は５段階評価で{this.state.sliderValue2}</h4>
                  </div>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>3/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                   defaultValue={moveSlider3?slideResult[2]:((joinedNumber+1)%2 == 0)?6:0} 
                    onChange={this.handleSlider3}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンA3がポイントに与える影響力は５段階評価で{this.state.sliderValue3}</h4>
                  </div>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>4/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                    defaultValue={moveSlider4?slideResult[3]:((joinedNumber+1)%2 == 0)?6:0}  
                    onChange={this.handleSlider4}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンB1がポイントに与える影響力は５段階評価で{this.state.sliderValue4}</h4>
                  </div>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>5/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                    defaultValue={moveSlider5?slideResult[4]:((joinedNumber+1)%2 == 0)?6:0} 
                    onChange={this.handleSlider5}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンB2がポイントに与える影響力は５段階評価で{this.state.sliderValue5}</h4>
                  </div>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>6/6</p>
                  <Slider
                    style={{marginLeft:"10%", marginRight:"10%"}}
                    min={0}
                    max={6}
                    step={1}
                   defaultValue={moveSlider6?slideResult[5]:((joinedNumber+1)%2 == 0)?6:0} 
                    onChange={this.handleSlider6}
                  />
                  <div style={{ padding:"5%"}}>
                    <h4>ボタンB3がポイントに与える影響力は５段階評価で{this.state.sliderValue6}</h4>
                  </div>
                </div>

                <div style={{ marginLeft: "2%"}}>
                  <p>5段階評価が終了しました。</p>
                  <p>左下の「次へ」をクリックしてください。</p><br />
                  <p>並び替え評価に遷移します。</p>

                </div>
              </SwipeableViews>

              <div style={{ margin:"2%"}}>
                {this.state.slideIndex == 6 ?
                  <RaisedButton 
                    label="次へ"
                    onClick={this.finish.bind(this,
                      this.state.sliderValue1,
                      this.state.sliderValue2,
                      this.state.sliderValue3,
                      this.state.sliderValue4,
                      this.state.sliderValue5,
                      this.state.sliderValue6,
                    )}
                    style={{ float:'left'}}
                    primary={true}
                  />
                  : null
                }

                <RaisedButton
                  label="進む"
                  style={{float: "right"}}
                  onTouchTap={this.handleNext.bind(this)}
                  primary={true}
                  disabled={this.state.slideIndex == 6}
                />

              <RaisedButton
                label="戻る"
                style={{float: "right"}}
                onTouchTap={this.handleBack.bind(this)}
                disabled={this.state.slideIndex == 0}
              />
            </div>

          </Card>
        </div>
      </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Experiment2)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import SwipeableViews from 'react-swipeable-views'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText, CardTitle } from 'material-ui/Card'
import Slider from 'material-ui/Slider'

const mapStateToProps = ({}) => ({
})

const axis = ["P-A","P-B","P-C","Q-A","Q-B","Q-C"]
let slideResult = [0,0,0,0,0,0]

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
    this.setState({sliderValue1: value});
  }

  handleSlider2 = (event, value) => {
    this.setState({sliderValue2: value});
  }

  handleSlider3 = (event, value) => {
    this.setState({sliderValue3: value});
  }

  handleSlider4 = (event, value) => {
    this.setState({sliderValue4: value});
  }

  handleSlider5 = (event, value) => {
    this.setState({sliderValue5: value});
  }

  handleSlider6 = (event, value) => {
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
    console.log("finish")

    const { manyTypeData } = this.props
    manyTypeData("5axis", JSON.parse(JSON.stringify(slideResult)))
    console.log("manyTypeData")
  }

  render() {
    const { moveEx } = this.props

    return(
      <div>
        <Card>
          <CardTitle title="ボルダルール実験" subtitle="5段階評価" />
          <div  style={{marginBottom: "5%", padding:"5%"}}>
            <Card>
              <SwipeableViews
                index={this.state.slideIndex}
              >
                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>1/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[0]} 
                    onChange={this.handleSlider1}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue1}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>
                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>2/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[1]} 
                    onChange={this.handleSlider2}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue2}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>3/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[2]} 
                    onChange={this.handleSlider3}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue3}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>4/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[3]} 
                    onChange={this.handleSlider4}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue4}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>5/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[4]} 
                    onChange={this.handleSlider5}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue5}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>

                <div style={{overflow: 'hidden'}}>
                  <p style={{ marginLeft: "2%"}}>6/6</p>
                  <Slider
                    style={{padding:"5%"}}
                    min={0}
                    max={5}
                    step={1}
                    defaultValue={slideResult[5]} 
                    onChange={this.handleSlider6}
                  />
                  <p>this.state.sliderValue:{this.state.sliderValue6}</p>
                  <p>slideResult:
                    {this.state.sliderValue1},
                    {this.state.sliderValue2},
                    {this.state.sliderValue3},
                    {this.state.sliderValue4},
                    {this.state.sliderValue5},
                    {this.state.sliderValue6}
                  </p>
                </div>

                <div style={{ marginLeft: "2%"}}>
                  <p>5段階評価が終了しました。</p>
                  <p>左下の「次へ」をクリックしてください。</p><br />
                  <p>並び替え評価に遷移します。</p>
                </div>
              </SwipeableViews>
            </Card>
          </div>
          <div  style={{margin: "5%", padding:"5%"}}>
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
    )
  }
}

export default connect(mapStateToProps)(Experiment2)

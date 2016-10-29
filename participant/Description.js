import React, { Component } from 'react'
import { connect } from 'react-redux'

import { finishDescription } from './actions'

import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import CircularProgress from 'material-ui/CircularProgress'
import {Card, CardHeader, CardText} from 'material-ui/Card'

class Description extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      slideIndex: 0,
    }
  }

  handleSlideIndex(value) {
    this.setState({
      slideIndex: value,
    })
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

  render() {
    return (
      <div>
        <CardHeader
          title="ボルダルール実験"
          subtitle="ルールの説明終了 "
        />
        <CardText>
          <Card style={{marginBottom: "5%"}}>
            <SwipeableViews
              index={this.state.slideIndex}
            >

            <div style={{overflow: 'hidden', marginLeft: "2%"}}>
              <p>1/4</p><br/>
              <p>これからボルダルール実験の説明をします。<br /><br />実験手順<br />(1)6つのボタンをクリックしまくって最高点数を目指す。<br />(2)どのボタンがどれくらい点数に影響したかを５段階評価する。<br />(3)どのボタンがどれくらい点数に影響したかを並び替え評価する。<br /><br />次のページから、(1)(2)(3)について詳しく説明していきます。</p>
            </div>

            <div style={{overflow: 'hidden' ,marginLeft: "2%"}}>
              <p>2/4</p><br/>
              <p>(1)6つのボタンをクリックしまくって最高点数を目指す。<br /><br />・ここでは、Aグループのボタン３つとBグループのボタン３つの合計６つのボタンが登場します。<br />・６つのボタンにはそれぞれにポイントが割り振られており、クリックすることでポイントを獲得できます。<br />・なお、１回の挑戦につき、AグループとBグループのそれぞれ１つずつボタンをクリックできます。<br />・クリックした２種類のボタンのポイントを合計したものがあなたの獲得ポイントです。<br /><br />・どのボタンがどれくらい獲得ポイントに影響を与えるか考えながらゲームを進めてください。
              </p>
            </div>

            <div style={{overflow: 'hidden' ,marginLeft: "2%"}}>
              <p>3/4</p><br/>
              <p>(2)どのボタンがどれくらい点数に影響したかを５段階評価する<br /><br />
                ・次に、６つのボタンについて５段階評価でレビューしてもらいます。<br />・先ほどのゲームについて、どのボタンがどれくらい点数に影響したかを５段階評価で判定してください。
              </p>
            </div>

            <div style={{overflow: 'hidden' ,marginLeft: "2%"}}>
              <p>4/4</p><br/>
              <p>(3)どのボタンがどれくらい点数に影響したかを並び替え評価する<br /><br />
                ・最後に、AグループとBグループのボタンについて並び替えでレビューしてもらいます。<br />・まず、Aグループのボタンについてどのボタンがどれくらい点数に影響したかを並び替えて評価してもらいます。<br />・次に、Bグループのボタンについてどのボタンがどれくらい点数に影響したかを並び替えて評価してもらいます。<br />・最後に、AグループのボタンとBグループのボタンについて、どちらのグループが獲得ポイントにより大きな影響を及ぼしたかについて並び替えて評価してもらいます。
              </p>
            </div>


            <CardText>
              <p>実験が開始されるまで、しばらくお待ちください。</p>
              <div style={{textAlign: "center"}}>
                <CircularProgress />
              </div>
            </CardText>

          </SwipeableViews>

          <div style={{margin:'2%'}}>
            <RaisedButton
              label="戻る"
              style={{float: "left"}}
              onTouchTap={this.handleBack.bind(this)}
              disabled={this.state.slideIndex == 0}
            />
            <RaisedButton
              label="進む"
              style={{float: "right"}}
              onTouchTap={this.handleNext.bind(this)}
              primary={true}
              disabled={this.state.slideIndex == 4}
            />
          </div>
        </Card>
      </CardText>
    </div>
    )
  }
}

export default connect()(Description)

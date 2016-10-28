import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, CardText, CardTitle } from 'material-ui/Card'

class Result extends Component{
  render(){
    return(
      <Card>
        <CardTitle title="ボルダルール実験" subtitle="終了画面" />
        <CardText>
          <p>これでボルダルール実験を終了します。</p>
          <p>ご協力ありがとうございました。</p>
        </CardText>
      </Card>
    )
  }
}

export default connect()(Result)

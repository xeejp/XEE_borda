import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Card, CardText, CardTitle } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'


const mapStateToProps = ({sequence, question1, question2 }) => ({
  sequence, question1, question2 
})

class EndQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Card>
        <CardTitle title="ボルダルール実験" subtitle="質問終了画面" />
        <CardText>
          <p>これで質問を終了します。</p>
          <p>しばらくお待ちください。</p>
        </CardText>
        <div style={{textAlign: "center"}}>
          <CircularProgress size={2}/>
        </div>
      </Card>
    )
  }
}

export default connect(mapStateToProps)(EndQuestion)

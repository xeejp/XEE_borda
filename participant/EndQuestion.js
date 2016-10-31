import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Card, CardText, CardTitle } from 'material-ui/Card'
import CircularProgress from 'material-ui/CircularProgress'


const mapStateToProps = ({}) => ({
})

let isnan = false
let endQ = true

class EndQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleChange(event) {
    const value = event.target.value
    isnan=isNaN(value)
    this.setState({ value })
  }

  handleClick(){
    const { manyTypeData, result } = this.props
    const { value } = this.state
    isClick = true
    manyTypeData("dnd",JSON.parse(JSON.stringify(result.push(value))))
  }

  render() {
    const { value } = this.state
    if(endQ){
      return (
        <Card>
          <CardTitle title="ボルダルール実験" subtitle="AグループはBグループの何倍率？" />
          <CardText>
            <TextField
              hintText=""
              value={value}
              onChange={this.handleChange.bind(this)}
              floatingLabelText="数値を入力してください"
            /><br /><br /><br />
            <RaisedButton
              label="回答" 
              style={{marginLeft: '3%'}}
              primary={true} 
              onClick={this.handleClick.bind(this)} 
              disabled={isnan}
            />
          </CardText>
        </Card>
      )
    }
    else{
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
}

export default connect(mapStateToProps)(EndQuestion)




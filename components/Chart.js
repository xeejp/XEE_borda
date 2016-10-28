import React, { Component } from 'react'
import { connect } from 'react-redux'
import throttle from 'react-throttle-render'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Highcharts from 'react-highcharts'

class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Card>
      <CardHeader
        title={"実験結果"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <span>
          <p>this page is rendering by ./components/Chart.js</p>
        </span>
      </CardText>
    </Card>
  )
  }
}

export default connect()(throttle(Chart, 200))

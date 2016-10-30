import React, { Component } from 'react'
import { connect } from 'react-redux'
import throttle from 'react-throttle-render'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Highcharts from 'react-highcharts'

const mapStateToProps = ({ joined, answered}) => ({
  joined,
  answered
})

class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { joined, answered } = this.props
    return (
    <Card>
      <CardHeader
        title={"status"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <span>
          <p>joined:{joined}</p>
          <p>answered:{answered}</p>
        </span>
      </CardText>
    </Card>
  )
  }
}

export default connect(mapStateToProps)(Chart)

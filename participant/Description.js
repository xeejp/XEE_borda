import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Card, CardText, CardTitle } from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'

const mapStateToProps = ({ }) => ({
})

const Description = ({ }) => (
  <Card>
    <CardTitle title="ボルダルール実験" subtitle="ルールの説明" />
    <CardText>
      setumei
    </CardText>
  </Card>
)
export default connect(mapStateToProps)(Description)

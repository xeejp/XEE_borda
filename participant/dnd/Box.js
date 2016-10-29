import React, { Component } from 'react'
import {Card, CardHeader} from 'material-ui/Card'

const mapStateToProps = ()=> {
}

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  textAlign: 'center',
}

class Box extends Component{
  render(){
    const { pageCounter } = this.props
      return (
        <div style={{...style }}>
          <Card style={{marginBottom: '.5rem', backgroundColor: (pageCounter == 0)?'#64FFDA':(pageCounter == 1)?'#76FF03':'white'}}>
            <CardHeader
              title="この下にドロップしてください"
            />
          </Card>
          {this.props.children}
        </div>
      );
  }
}

export default Box

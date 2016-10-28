import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = ()=> {
}

const style = {
  marginLeft: '3%',
  float: 'left',
}


class Button extends Component{
  render(){
    const { next, array} = this.props;
    return (
      <div>
        <FlatButton 
          label="戻る"
          disabled={true} 
          style={{...style}}
        />
        <RaisedButton  
          label="次へ"
          onClick={next.bind(this,array)} 
          style={{...style}}
          primary={true} 
        />
      </div>
    );

  }
}

export default connect()(Button)






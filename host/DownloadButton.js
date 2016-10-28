import React, {Component} from 'react'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import FileFileDownload from 'material-ui/svg-icons/file/file-download'

const mapStateToProps = ({ participants, question_text, answered }) => ({
  participants, question_text, answered
})
class DownloadButton extends Component {

  render() {
    const { participants, question_text, style, disabled, answered } = this.props
    var content 
      = "ID,1問目の回答,2問目の回答\n"
        + Object.keys(participants).map(id => [id, 
            

            participants[id].question1,
            
            participants[id].question2
        
        ].join(',')).join("\n")
    return (
      <div>
      <p>{content}</p>
      <p>answered:{answered}</p>
    </div>
    )
  }
}

export default connect(mapStateToProps)(DownloadButton) 

import React from 'react'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import FileFileDownload from 'material-ui/svg-icons/file/file-download'

const mapStateToProps = ({ participants }) => ({
  participants
})

const DownloadButton = ({ participants, style, disabled }) => (
  <FloatingActionButton
    style={style}
    disabled={disabled}
    onClick={() => {
      var fileName = "borda_result.csv"

      var content 
        = "ボルダルール実験\n" 
        + "実験日," + new Date() + "\n"
        + "登録者数," + Object.keys(participants).length + "\n"
        + "ID,5段階評価:pa,pb,pc,qa,qb,qc,並び替え:pの1位,pの2位,pの3位,qの1位,qの2位,qの3位,評価軸の1位,評価軸の2位\n"
        + Object.keys(participants).map(id => [id, 

            participants[id].question1,
            participants[id].question2

        ].join(',')).join("\n")

      var blob = new Blob([content]);
      var url = window.URL || window.webkitURL;
      var blobURL = url.createObjectURL(blob);

      if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(blob, fileName)
      }
      else{
        var a = document.createElement('a');
        a.download = fileName;
        a.href = blobURL;
        a.click();  
      }
    }
    }
  ><FileFileDownload /></FloatingActionButton>
)

export default connect(mapStateToProps)(DownloadButton) 

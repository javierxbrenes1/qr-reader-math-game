import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import MathSymbolWrapper from './mathSymbolWrapper';
import MathSymbolWrapperText from './mathSymbolWrapperText';

const AdminQuestionDetailItem = ({id,quesDes}) => {
  
    return (
        <div className="col-12 col-md-3">
          <div className="card text-white bg-success mb-3">
              <div className="card-header">
              {ReactHtmlParser(quesDes, {transform: function(node, index) {
                        if(node.type ==="tag" && node.name === "mathsymbolwrapper"){
                            return <MathSymbolWrapper key={index} value={node.attribs['value']}/>
                        }
                        if(node.type === "tag" && node.name === "mathsymbolwrappertext" ){
                            return <MathSymbolWrapperText key={index} value={node.attribs['value']} />
                        }
                    }
                })}
              </div>
              <div className="card-body">
                  <h4 className="card-title">Dark card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
      </div>
    )
}

export default AdminQuestionDetailItem

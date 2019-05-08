import React from 'react'

const AdminQuestionDetailItem = ({quesDes}) => {
  
    return (
        <div className="col-12 col-md-4 col-lg-3">
          <div className="card text-white bg-success mb-3">
              <div className="card-header">
                  {quesDes}
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

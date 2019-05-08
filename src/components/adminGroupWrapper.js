import React from 'react'

const AdminGroupWrapper = ({desc, children, id}) => {
    const headerId=`heading${id}`;
    const collapseId = `collapse${id}`
    const accordionId = `accordion${id}`
  return (
      <div className="col-12 mt-4">
        <div id={accordionId}>
         <div className="card">
            <div className="card-header" id={headerId}>
                    <h3>
                        <button className="btn btn-link" data-toggle="collapse" data-target={`#${collapseId}`} aria-expanded="true" aria-controls={collapseId}>
                            {desc}
                        </button>
                    </h3>
            </div>
            <div id={collapseId} className="collapse show" aria-labelledby={headerId} data-parent={`#${accordionId}`}>
                    <div className="card-body bg-light">
                        <div className="row">
                            {children}
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AdminGroupWrapper

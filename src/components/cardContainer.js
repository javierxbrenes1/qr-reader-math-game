import React from 'react'

const CardContainer = ({children}) => {
    return (<div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <div className="d-flex justify-content-center mt-5">
               {children}
            </div>
        </div>
    </div>
</div>);
}

export default CardContainer

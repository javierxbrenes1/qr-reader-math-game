import React from 'react';

const AdminGroupWrapper = ({ desc, children, id, removeStadistics }) => {
  const headerId = `heading${id}`;
  const collapseId = `collapse${id}`;
  const accordionId = `accordion${id}`;
  return (
    <div className="col-12">
      <div id={accordionId}>
        <div className="card" style={{ minWidth: '450px' }}>
          <div className="card-header" id={headerId}>
            <div className="d-flex justify-content-between">
              <h3 className="align-self-center">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target={`#${collapseId}`}
                  aria-expanded="true"
                  aria-controls={collapseId}
                >
                  {desc}
                </button>
              </h3>
              <button
                className="btn btn-primary align-self-center"
                onClick={() => removeStadistics(id)}
              >
                Reiniciar estadisticas
              </button>
            </div>
          </div>
          <div
            id={collapseId}
            className="collapse show"
            aria-labelledby={headerId}
            data-parent={`#${accordionId}`}
          >
            <div className="card-body bg-light">
              <div className="row">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGroupWrapper;

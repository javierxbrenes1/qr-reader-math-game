/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import ReactHtmlParser from 'react-html-parser';
import MathSymbolWrapper from './mathSymbolWrapper';
import MathSymbolWrapperText from './mathSymbolWrapperText';
import QuestionOptionItem from './questionOptionItem';
import AdminPieInfo from './adminPieInfo';

const AdminQuestionDetailItem = ({ id, quesDes, answer, options, answers }) => {
  const optionsComp = useMemo(
    () =>
      options.map((r, index) => (
        <QuestionOptionItem
          key={index}
          question={r}
          withInput={false}
          p={1}
          ml={1}
        />
      )),
    []
  );
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <div className="card  mb-3">
        <div
          className="card-header"
          style={{ height: '290px', overflow: 'auto' }}
        >
          <div>
            <span>Pregunta {id}</span>{' '}
            {ReactHtmlParser(quesDes, {
              transform(node, index) {
                if (node.type === 'tag' && node.name === 'mathsymbolwrapper') {
                  return (
                    <MathSymbolWrapper
                      key={index}
                      value={node.attribs.value}
                    />
                  );
                }
                if (
                  node.type === 'tag' &&
                  node.name === 'mathsymbolwrappertext'
                ) {
                  return (
                    <MathSymbolWrapperText
                      key={index}
                      value={node.attribs.value}
                    />
                  );
                }
              },
            })}
          </div>
          <div className="options mt-3">{optionsComp}</div>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            Respuesta correcta: Opción {answer.toUpperCase()}
          </h4>
          <AdminPieInfo answers={answers} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdminQuestionDetailItem);

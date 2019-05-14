import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import groupBy from 'lodash/groupBy';

const AdminPieInfo = ({answers}) => {
const indexCorrectas = 1;
const indexIncorrectas = 0;
    
if(answers === undefined)
    return null;

 const answersAsArray = Array.from(Object.keys(answers), t => answers[t]);
 const groups = groupBy(answersAsArray, 'response');
 const correctas = groups[indexCorrectas] === undefined ? 0 : groups[indexCorrectas].length;
 const incorrectas = groups[indexIncorrectas] === undefined ? 0 : groups[indexIncorrectas].length;
  return (
      <div>
        <div style={{width:'15em', height:'15em', margin: '0 auto'}}>
        <PieChart
            data={[
                { title: 'Respuestas Correctas', value: correctas, color: '#269A47' },
                { title: 'Respuestas Incorrectas', value: incorrectas, color: '#FF644D' },
            ]}
            animate
            lineWidth={20}
            paddingAngle={18}
            rounded
            label
            labelStyle={{
                fontSize: '15px',
                fontFamily:'sans-serif'
            }}
            labelPosition={60}
            />
        </div>
    </div>
  )
}

export default AdminPieInfo

import React  from 'react';
import QrReader from 'react-qr-scanner';

const Reader = ({setData}) => {
 

    return (<div>
            <QrReader
            delay={200}
            style={{height: '240', width:'320'}}
            onError={(err) => console.log(err)}
            onScan={(dat) => setData(dat)}
            />
          </div>)
}


export default Reader;
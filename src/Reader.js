import React  from 'react';
import QrReader from 'react-qr-scanner';

const Reader = ({setData}) => {
 

    return (
    <React.Fragment>
        <div style={{width:'500px', height:'50vh', position: 'relative', margin: '0 auto'}}>
            <div className="container"></div>
                    <QrReader
                    facingMode="rear"
                    delay={200}
                    onError={(err) => console.log(err)}
                                style={{width:'100%', height:'100%'}}
                    onScan={(dat) => setData(dat)}
                    />
                    </div>
                    
                    </React.Fragment>
      )
}


export default Reader;
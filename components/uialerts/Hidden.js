import React from 'react';
import {withWidth} from '@material-ui/core'

const Hidden = (props) => {
    return ( 
        <div>
            <p>
                Ancho: {props.width}
            </p>
        </div>
     );
}
 
export default withWidth()(Hidden);
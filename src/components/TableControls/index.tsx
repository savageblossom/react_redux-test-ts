import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions';

interface TableControlsProps {
    onChangePage: (any);
}

const TableControls: React.FC<TableControlsProps> = (props) => (
    <div className="controls">
        <button onClick={() => props.onChangePage(['SUBSTR', 1])}>Prev</button>
        <button onClick={() => props.onChangePage(['ADD', 1])}>Next</button>
    </div>
)

const mapDispatchToProps = (dispatch:any) => {
    return {
        onChangePage: (payload: [string, number]) => dispatch(actionCreator.onChangePage(payload)),
    };
  };

export default connect(null, mapDispatchToProps)(TableControls);
import React from 'react';
import { connect } from "react-redux";

import CurrentPage from './CurrentPage';
import EntriesCount from './EntriesCount';

interface TableInfoProps{
    currentPage: number;
    count: number;
}

const TableInfo: React.FC<TableInfoProps> = ({currentPage, count}) => (
<div className="tableInfo">
    <CurrentPage currentPage={currentPage} />
    <EntriesCount count={count} />
</div>
)

const mapStateToProps = (state: any) => ({
    currentPage: state.currentPage,
    count: state.swapi_data.count
})

export default connect(mapStateToProps)(TableInfo);
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from '../store/actions';

import Table from '../components/Table';
import TableControls from '../components/TableControls';
import TableInfo from '../components/TableInfo';

interface AppProps {
  currentPage: number;
  onDataFetched: (any)
}

class App extends Component<AppProps, {}> {
  componentDidMount() {
    this.props.onDataFetched(this.props.currentPage)
  }

  componentDidUpdate(prevProps:any) {
    if(this.props.currentPage !== prevProps.currentPage) {
      this.props.onDataFetched(this.props.currentPage)
    }
  }

  render() {
    return (
      <div className="container">
        <Table />
        <TableInfo />
        <TableControls />
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    onDataFetched: (currentPage: number) => dispatch(actionCreator.onDataFetched(currentPage)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

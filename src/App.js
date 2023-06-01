import React, { useReducer } from 'react';
import reducers from "./reducers"
import { initialState } from './reducers';
import { memoryAdd, memoryClear, memoryRecall, applyNumber, changeOperation, clearDisplay } from './actions';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(memoryAdd())} />
              <CalcButton value={"MR"} onClick={() => dispatch(memoryRecall())} />
              <CalcButton value={"MC"} onClick={() => dispatch(memoryClear())} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={2} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={3} onClick={(e) => dispatch(applyNumber(e.target.value))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={5} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={6} onClick={(e) => dispatch(applyNumber(e.target.value))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={8} onClick={(e) => dispatch(applyNumber(e.target.value))} />
              <CalcButton value={9} onClick={(e) => dispatch(applyNumber(e.target.value))} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => dispatch(changeOperation(e.target.value))} />
              <CalcButton value={"*"} onClick={(e) => dispatch(changeOperation(e.target.value))} />
              <CalcButton value={"-"} onClick={(e) => dispatch(changeOperation(e.target.value))} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

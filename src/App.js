import React from 'react';
import CounterContainer from './modules/CounterContainer';
import TodosContainer from './components/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;

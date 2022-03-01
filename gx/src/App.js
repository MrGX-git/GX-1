
import Greeting from './Changed';
import Welcome from './Welcome';

import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome user="x-man" age={30 +40}/>
      <Greeting title="Hai World" subTitle="50"/>
    </div>
  );
}

export default App;

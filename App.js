import react from 'react';
import Cls from './sample';
import  ReactDOM  from 'react-dom';

function App(props) {
  return (
    <div>
      <Cls/>
      <h1> favourite brand:{props.sam}</h1>
    </div>
  );
}
const br=<App sam="Cadbury"/>;
ReactDOM.render(br ,document.getElementById('root'));
export default App;


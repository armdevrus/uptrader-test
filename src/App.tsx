import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Title } from './components/Title/Title';


function App() {
  
  return (
    <div className="App">
      <Title message="Drag and Drop" />
      <nav>
        <ul>
          <li><Link to={`work`}>Work's todos</Link></li>
          <li><Link to={`sport`}>Sport's todos</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;

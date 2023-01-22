import Navbar from './components/navbar/Navbar';
import './App.css';
import Info from './components/Info/Info';
import Columns from './components/Columns/Columns';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Info />
      <Columns />
      <Info />
    </div>
  );
}

export default App;


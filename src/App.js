import './App.css';
import Navbar from './components/Navbar';

const menuList = ["Products", "Services", "Overview", "Contact Us"];
function App() {
  return (
    <div className="App">
      <Navbar menuList={menuList} />
    </div>
  );
}

export default App;

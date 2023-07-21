import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Nar/Navbar';
import Slogan from './components/Slogan/Slogan';
function App() {
  return (
    <div>
        <div  className='font-sora overflow-y-auto overflow-w-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to bg-purple-700 text-white'>
            <Navbar/>
            <Slogan/>
            <Content/>
        </div>
    </div>
    
  );
}

export default App;

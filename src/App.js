import './App.css';
import Menu from './component/Menu';
import Footer from './component/Footer';
import RounterURL from './rounter/RounterURL';
import Mỷounter from './rounter/MyRouter';
import Home from './component/Home/Home';
import VietNam from './component/VietNam/VietNam';
import World from './component/World';
import Vaccin from './component/Vaccin/Vaccin';
import Download from './component/Download';
import MyRouter from './rounter/MyRouter';
const sections = [
  {id:1,component:Home, title:'Home',url:'/'},
  {id:2,component:VietNam, title:'VietNam',url:'/vietnam'},
  {id:3,component:World, title:'World',url:'/world'},
  {id:4,component:Vaccin, title:'Vaccin',url:'/vaccin'},
  {id:5,component:Download, title:'Download',url:'/download'},
]


function App() {
  return (
    <div className="App">
      <Menu sections={sections} /><hr/>
      <RounterURL sections={sections} />
      <MyRouter/>
      <Footer />
    </div>

  );
}

export default App;

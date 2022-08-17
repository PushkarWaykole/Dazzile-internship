
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';

// layout colors
//'my_light_blue': '#F7F7FC',
//'my_grey': "#E2E2EA",
//'my_dark_blue': "#5541D7",
// text colors
// 'my_dark_grey': "#92929D",
//'my_green': "#42BDA1",
//'my_dark_slate': "#11142D"


function App() {
  return (
    <div>


      <div className="bg-my_light_blue">

      <Navbar  />

      <Sidebar />
      </div>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import Home from './Pages/HomePage';
import { Typography } from '@mui/material';
function App() {
  return (
    <div className="bg-slate-200 h-screen" >
      <Router>
        <header className=' bg-gray-800 flex items-center text-center justify-between rounded-b-md shadow-md shadow-black ' >
          <div className="start-0" >
            <button>
              <TbMoneybag className="text-5xl text-white" />
            </button>
          </div>
          <div>
            <Typography variant='h3' className='text-slate-200 w-full'>
              EDE Budget Tracker
            </Typography>
          </div>
          <div>
            <button>
              <IoIosAdd className="text-6xl text-white" />
            </button>
          </div>
        </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

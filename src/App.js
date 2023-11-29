import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Pages/Global/Topbar";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
   
  
     <div className="app">
      <main className="content">
        <Topbar/>
        <Dashboard/>
      </main>
    </div>
  
  );
}

export default App;

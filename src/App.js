import { Button } from "@mui/material";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';


function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained" color= "secondary" startIcon = {<AccessAlarmsIcon/>}>Contained</Button>
      <Button variant="outlined" endIcon = {<AccessAlarmsIcon/>}>Outlined</Button>
    </div>
  );
}

export default App;

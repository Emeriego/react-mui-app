import { Button, Typography } from "@mui/material";
import {Alarm, Add, AlarmAdd} from '@mui/icons-material';


function App() {
//git remote add <url copied from your github is pasted here>
//this command will link your git with the specified repository.
  return (
    <div className="App">
      <Button variant="text" endIcon={<Add/>}>Text</Button>
      <Button variant="contained" color= "secondary" startIcon = {<AlarmAdd/>}>Contained</Button>
      <Button variant="outlined" endIcon = {<Alarm/>}>Outlined</Button>

      <Typography variant = "h1">
        This is how h2 is tagged. The variant gives you the style.

      </Typography>
    </div>
  );
}

export default App;

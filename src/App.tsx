import "./App.css";
import { TodoList } from "./TodoList";
import SimpleSnackbar from './SimpleSnackbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
   
    <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
        <SimpleSnackbar />
      </Grid>

      <Grid container spacing={2} item xs={12} md={12} display="flex" justifyContent="center" alignItems="center" padding={2}>
        <Grid item xs={6} md={4} style={{ padding: '1rem' }}>
          <Item>
            <TodoList name="Alice" items={["Buy milk", "Buy banana", "Buy cherry"]} />
          </Item>
        </Grid>

        <Grid item xs={6} md={8} style={{ padding: '1rem' }}>
          <Item>nigga</Item>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default App;
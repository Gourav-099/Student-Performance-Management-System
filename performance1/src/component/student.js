import  React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container , Paper,Button} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));


export default function Formstudent() {
    const paperStyle={padding:'50px 20px', width:800,margin:"20px auto"}
    const[Firstname,setFirstName]=useState('')
    const[Lastname,setLastName]=useState('')
    const[DOB, setDOB] = useState(new Date());
    const[RollNo,setRollNo]=useState('')
    const[MailId,setMailId]=useState('')
    const[ContactNo,setContactNo]=useState('')
    const[Password,setPassword]=useState('')

    const handleClick=(e)=>{
      e.preventDefault()
      const student={Firstname,Lastname,DOB,RollNo,MailId,ContactNo,Password}
      console.log(student)
    } 
    

     const classes = useStyles();

    


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>  

      <h1 style={{color:"blue"}}><i>STUDENT DETAILS</i></h1>

    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          autoComplete="First Name"
          value={Firstname}
          onChange={(e)=>setFirstName(e.target.value)}
        />
        <TextField
          required
          id="outlined-Last Name-input"
          label="Last Name"
          autoComplete="Last Name"
          value={Lastname}
          onChange={(e)=>setLastName(e.target.value)}
        />
        </div>
        <div>
        <TextField
        required
          id="outlined-Roll no.-input"
          label="Roll No"
          //type="D1234-0021"
          autoComplete="Roll No."
          value={RollNo}
          onChange={(e)=>setRollNo(e.target.value)}
        />
        <TextField
          id="outlined-Mail Id-input"
          label="Mail Id"
          defaultValue="@gmail.com"
        
          value={MailId}
          onChange={(e)=>setMailId(e.target.value)}
        />
        <TextField
          id="outlined-Contact number"
          label="Contact Number"
          type="number"
          //InputLabelProps={{
            //shrink: true,
          //}}

          value={ContactNo}
          onChange={(e)=>setContactNo(e.target.value)}
        />
      </div>
      <div>
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
        value={DOB}
          onChange={(e)=>setDOB(e.target.value)}
      />
        </div>
      <div>
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
          required
          id="filled-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        </div>
        

      <Button variant="contained" color="secondary" onClick={handleClick}>
        SUBMIT
      </Button>
    </form>
    </Paper>
    </Container>
  );
}

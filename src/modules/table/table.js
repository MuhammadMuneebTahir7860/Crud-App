import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
addBtn:{
  marginBottom:20
},
});

function createData(id,name, rollNo, Class, section) {
  return {id, name, rollNo, Class, section };
 }
export default function BasicTable() {
  const classes = useStyles();
  const[name,setName]=useState('');
  const[rollNo,setRollNo]=useState('');
  const[stuClass,setStuClass]=useState('');
  const[section,setSection]=useState('');
  const[flag,setFlag]=useState(false);
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const[updatedIndex,setUpdatedIndex]=useState(0);
  const[deleteIndex,setdeleteIndex]=useState(0);
  const [Row,setRow]=useState([
    createData(1,'Muneeb', 237, 'BS(CS)', 'B'),
    createData(2,'Awais', 262, 'BS(I.T)', 'A'),
    createData(3,'Bilal', 305, 'BS(Eco)', 'C'),
    createData(4,'Zain', 356, 'BS(Zology)','D'),
  ]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFlag(false);
    setName('');
    setRollNo('');
    setStuClass('');
    setSection('');
  };
  const ctaHandler = () =>{
    let student={
      name,
      rollNo,
      Class:stuClass,
      section,
    }
    setRow([...Row,student]);
    setName('');
    setRollNo('');
    setStuClass('');
    setSection('');
    handleClose();
  }
   
  const updateHandler = (row,index) =>{
    handleClickOpen();
    setUpdatedIndex(index);
    setName(row.name);
    setRollNo(row.rollNo);
    setStuClass(row.Class);
    setSection(row.section);
    setFlag(true)
  }
  const ctaUpdateHandler = ()=>{
    let student={
      name,
      rollNo,
      Class:stuClass,
      section,
    }
    let updateStudents=Row.map((stu,index)=>{
      if(updatedIndex==index){
        return student;
      }
      else{
        return stu;
      }
    })
    setRow([...updateStudents]);
    setName('');
    setRollNo('');
    setStuClass('');
    setSection('');
    handleClose();
    setFlag(false);
  } 
  const handleDeleteClickOpen = (index) => {
    setDeleteOpen(true);
    setdeleteIndex(index);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  const deleteHandler=()=>{
    let newRow = Row.filter((row,i)=>{
        if(i !==deleteIndex){
            return row;
        }
    });
    setRow([...newRow]);
    handleDeleteClose();
}

  return (
    <>
     <div>
      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the data of this Student?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Disagree
          </Button>
          <Button onClick={deleteHandler} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
     <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Student Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add Student Data, please enter Student Name, Student Roll Number, Student Class, Student Section.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Student Name"
            type="text"
            fullWidth
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
           <TextField
            margin="dense"
            id="Roll No."
            label="Student Roll No."
            type="Number"
            fullWidth
            onChange={(e)=>setRollNo(e.target.value)}
            value={rollNo}
          />
           <TextField
            margin="dense"
            id="Student Class"
            label="Student Class"
            type="text"
            fullWidth
            onChange={(e)=>setStuClass(e.target.value)}
            value={stuClass}
          />
          <TextField
            margin="dense"
            id="Student Class"
            label="Student Section"
            type="text"
            fullWidth
            onChange={(e)=>setSection(e.target.value)}
            value={section}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {flag?
          <Button onClick={ctaUpdateHandler} color="primary">
            Update
          </Button>:
          <Button onClick={ctaHandler} color="primary">
          Submit
        </Button>
}
        </DialogActions>
      </Dialog>
    </div>
    <Button className={classes.addBtn} onClick={handleClickOpen} variant="contained" color="primary">
  Add Data
</Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr no.</TableCell>
            <TableCell align="left">Name</TableCell>
            <Hidden xsDown>
            <TableCell align="right">Roll No.</TableCell>
            <Hidden smDown>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Section</TableCell>
            </Hidden>
            </Hidden>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>    
          {Row.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {Number(index+1)}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
            <Hidden xsDown>
              <TableCell align="right">{row.rollNo}</TableCell>
              <Hidden smDown>
              <TableCell align="right">{row.stClass}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
              </Hidden>
              </Hidden>
              <TableCell align="right"><Link className='decoration' to={"/User/"+Number(index+1)+"/"+row.name+"/" + row.rollNo +"/" + row.Class +"/" + row.section}><Button color='primary' variant="contained">View</Button></Link>&nbsp;&nbsp;<a href='#' className='decoration' onClick={()=>updateHandler(row,index)}><Button color='secondry' variant="contained">Edit</Button></a>&nbsp;&nbsp;<a href='#' className='decoration' onClick={()=>handleDeleteClickOpen(index)}><Button color='secondary' variant="contained">Delete</Button></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


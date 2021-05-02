import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PersistentDrawerLeft from '../../commonComponents/drawer/drawer';
import {Divider} from '@material-ui/core'; 
const useStyles = makeStyles((theme)=>({
    mainSection:{
        padding:20,
        minWidth:200,
        maxWidth:500,
        backgroundColor:'',
        margin:'auto',
        borderStyle:'dashed',
        borderRadius:1,
        borderColor:'black',
    },
    inline:{
        display:'inline-flex',
    },
    studentData:{
        marginLeft:20,
        fontSize:18,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },  
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },     

}));
function User(props){
  const classes = useStyles();
    return(
        <div>
             <PersistentDrawerLeft/>
          <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
        <div className={classes.mainSection}>
            <div className={classes.inline}>
            <h3>Name : </h3>
            <p  className={classes.studentData}>{props.match.params.name}</p>
            </div>
            <Divider/>
            <div className={classes.inline}>
            <h3>Roll No : </h3>
            <p className={classes.studentData}>{props.match.params.rollNo}</p>
            </div>
            <Divider/>
            <div className={classes.inline}>
            <h3>Class :</h3>
            <p className={classes.studentData}>{props.match.params.Class}</p>
            </div>
            <Divider/>
            <div className={classes.inline}>
            <h3>Section :</h3>
            <p className={classes.studentData}>{props.match.params.section}</p>
            </div>
            <Divider/>
           </div>
      </main>
          
        </div>
    )
};

export default withRouter(User);

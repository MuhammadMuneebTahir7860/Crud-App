import PersistentDrawerLeft from '../../commonComponents/drawer/drawer';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
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
    heading:{
        textAlign:'center',
    }
}));

export default function Spam(){
  const classes = useStyles()
    return(
        <div>
            <PersistentDrawerLeft/>
            <div>
          <PersistentDrawerLeft/>
          <main
        className={clsx(classes.content)}
      >
        <div className={classes.drawerHeader} />
        <h1 className={classes.heading}>This is Spam Page</h1>
      </main>
      </div>
        </div>
    )
}
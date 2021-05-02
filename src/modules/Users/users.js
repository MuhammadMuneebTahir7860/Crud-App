import BasicTable from '../../modules/table/table';
import clsx from 'clsx';
import PersistentDrawerLeft from '../../commonComponents/drawer/drawer';
import { makeStyles, useTheme ,fade } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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
}));

export default function Users(){
  const classes = useStyles()
  return(
      <div>
          <PersistentDrawerLeft/>
          <main
        className={clsx(classes.content)}
      >
        <div className={classes.drawerHeader} />
       <BasicTable />
      </main>
      </div>
  )
}
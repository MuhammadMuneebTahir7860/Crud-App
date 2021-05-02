import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Typography} from '@material-ui/core'
export default function AlertDialog(props) {
  const[confirmDialog,setConfirmDialog]=useState(props);
  return (
    <div>
      <Dialog
        open={confirmDialog.isOpen}>
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
          <Typography variant='h6'>
                {confirmDialog.title}
          </Typography>
        </DialogContent>
          <DialogContent>
          <Typography variant='subtitle2'>
                {confirmDialog.subtitle}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">
            Disagree
          </Button>
          <Button  color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

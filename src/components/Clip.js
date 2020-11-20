import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleClick = () => {
    console.log('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label="Name"
        clickable
        color="primary"
        onClick={handleClick}
      />
      <Chip
        icon={<ConfirmationNumberIcon />}
        label="ID"
        clickable
        color="primary"
        onClick={handleClick}
      />

      <Chip
        icon={<EmailIcon />}
        label="Email"
        clickable
        color="primary"
        onClick={handleClick}
      />

      <Chip
        icon={<PersonIcon />}
        label="Roles"
        clickable
        color="primary"
        onClick={handleClick}
      />
      <Chip
        icon={<FingerprintIcon />}
        label="Token"
        clickable
        color="primary"
        onClick={handleClick}
      />
    </div>
  );
}

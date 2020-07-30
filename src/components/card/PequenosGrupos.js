import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HouseIcon from '@material-ui/icons/House';



const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#2BAFCB',
    textColor: 'white'
  },
  text: {
    color: 'white',
    textAlign: 'end',
    fontSize: 50,
  },

  subtext: {
    color: 'white',
    fontSize: 26,
    marginTop: 16,
    textAlign: 'start',
  },
  icon: {
    alignItems: 'left',
    fontSize: 'large',
    marginBottom: '-10px',
    marginRight: '20px'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div>
      <Card title='Membros' className={classes.card}
      >
        <CardContent>
          <Typography className={classes.text}>
            <HouseIcon style={{ fontSize: 60 }} className={classes.icon} />
            20
        </Typography>
          <Typography className={classes.subtext}>
            Pequenos Grupos
        </Typography>
        </CardContent>
      </Card>

    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';



const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#3FAF55',
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
    marginBottom: '-7px',
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
            <AttachMoneyIcon style={{ fontSize: 60 }} className={classes.icon} />
            13.500
        </Typography>
          <Typography className={classes.subtext}>
            Finanças
        </Typography>
        </CardContent>
      </Card>

    </div>
  );
}

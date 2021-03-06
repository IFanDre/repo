import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "auto",
        height: "auto",
    },
}));

export default function ImageGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {props.images.map((pic) => (
                    <GridListTile key={pic.id} cols={pic.cols || 1}>
                        <img src={pic.src} alt={pic.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

import React, { useEffect } from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  getNewsData,
  deleteNews,
  editNews,
  getEditNews,
} from "../../redux/actions/newsAction";
import { openModel } from "../../redux/actions/modelAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  cardRoot: {
    minWidth: 345,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
}));

function NewsList({ getNewsData, news, deleteNews, openModel, getEditNews }) {
  const classes = useStyles();

  const handleDelete = (index) => {
    window.confirm("are you Sure you want to delete this news ?") &&
      deleteNews(index);
  };

  const handleEdit = (item, index) => {
    getEditNews(index);
    openModel();
  };

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {news &&
            news.items.map((item, index) => (
              <Grid key={index} item>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleEdit(item, index)}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   // getNewsData: () => dispatch(getNewsData()),
//   // deleteNews: () => dispatch(deleteNews()),
// });

const mapStateToProps = ({ news }) => ({
  news,
});
export default connect(mapStateToProps, {
  getNewsData,
  deleteNews,
  openModel,
  editNews,
  getEditNews,
})(NewsList);

import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  CardMedia,
} from "@material-ui/core";

import { connect } from "react-redux";
import { addNews, getNewsData, editNews } from "../../redux/actions/newsAction";
import { openModel, closeModel } from "../../redux/actions/modelAction";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newsForm: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "40vw",
  },
  textFieldStyle: {
    width: "100%",
    marginBottom: 20,
  },
  media: {
    height: 300,
    objectFit: "cover",
  },
  file: {
    display: "none",
  },
}));

function NewsForm({
  addNews,
  getNewsData,
  model,
  newsStore,
  openModel,
  closeModel,
  editNews,
}) {
  useEffect(() => {
    if (newsStore.selected || newsStore.selected === 0) {
      setNews(newsStore.item);
    }
  }, [newsStore]);
  const classes = useStyles();
  const [news, setNews] = useState({
    title: "",
    body: "",
    image: null,
  });
  const fileInput = useRef(null);
  const handleFile = (e) => {
    fileInput.current.click();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNews((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Convert Image to Base64
  const convertImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);
    reader.onload = () => {
      setNews((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
  };

  const formSubmit = (e) => {
    e.preventDefault();

    // editNews
    if (newsStore.selected || newsStore.selected === 0) {
      // Edit
      editNews(news, newsStore.selected);
    } else {
      // Add New One
      addNews(news);
    }

    getNewsData();
    closeModel();
    setNews(() => ({
      title: "",
      body: "",
      image: null,
    }));
  };

  return (
    <div className={classes.newsForm}>
      <Button variant="contained" color="primary" onClick={openModel}>
        Add New News
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={model.open}
        onClose={closeModel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={model.open}>
          <div className={classes.paper}>
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={formSubmit}
            >
              <div>
                <CardMedia
                  className={classes.media}
                  image={
                    news.image ? news.image : `https://via.placeholder.com/300`
                  }
                  title="Contemplative Reptile"
                />

                <input
                  ref={fileInput}
                  className={classes.file}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => convertImage(e)}
                />

                <Button
                  variant="contained"
                  onClick={handleFile}
                  color="primary"
                  style={{ margin: "20px 40px" }}
                >
                  choose Image
                </Button>
              </div>
              <div>
                <TextField
                  className={classes.textFieldStyle}
                  id="standard-basic"
                  label="title"
                  name="title"
                  required
                  value={news.title}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div>
                <TextField
                  className={classes.textFieldStyle}
                  id="standard-basic"
                  label="Body"
                  name="body"
                  required
                  value={news.body}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>

              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // onClick={() => closeModel()}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ model, news }) => ({
  model,
  newsStore: news,
});

export default connect(mapStateToProps, {
  addNews,
  getNewsData,
  openModel,
  closeModel,
  editNews,
})(NewsForm);

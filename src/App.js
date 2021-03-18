import { Container } from "@material-ui/core";
import "./App.css";
import { Navbar, NewsForm, NewsList } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

function App({ handleEdit }) {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <Container>
          <NewsForm />
          <NewsList handleEdit={handleEdit} />
        </Container>
      </div>
    </Provider>
  );
}

export default App;

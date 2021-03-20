import { Container } from "@material-ui/core";
import "./App.css";
import { Navbar, NewsForm, NewsList } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <Container>
          <NewsForm />
          <NewsList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;

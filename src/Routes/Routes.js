import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import MovieList from "../pages/MovieList";
import { MovieProvider } from "../utils/Services/MovieContext";
import GamesList from "../pages/GamesList";
import { GamesProvider } from "../utils/Services/GamesContext";
import PageLayout from "../layouts/PageLayout";
import DetailMovie from "../pages/DetailMovie";
import DetailGames from "../pages/DetailGames";
import FormMovie from "../pages/FormMovie";
import Register from "../pages/Register";
import { LoginProvider } from "../utils/Services/LoginContext";
import SearchPage from "../pages/SearchPage";
import FormMovieEdit from "../pages/FormMovieEdit";
import FormGameEdit from "../pages/FormGameEdit";
import FormGame from "../pages/FormGame";
import ChangePassword from "../pages/ChangePassword";
import AntdLayout from "../layouts/AntdLayout";
import Cookies from "js-cookie";
import AllMovie from "../components/Section/AllMovie";
import AllGames from "../components/Section/AllGames";

function Routes() {
  return (
    <Router>
      <LoginProvider>
        <MovieProvider>
          <GamesProvider>
            <Switch>
              <Route path="/" exact>
                <AntdLayout children={<Home />} />
              </Route>
              <Route path="/about" exact>
                <AntdLayout children={<About />} />
              </Route>
              <Route path="/login" exact>
                <PageLayout children={<Login />} />
              </Route>
              <Route path="/register" exact>
                <PageLayout children={<Register />} />
              </Route>
              <Route path="/change-pass" exact>
                <PageLayout children={<ChangePassword />} />
              </Route>
              <Route path="/movie-list" exact>
                <AntdLayout children={<MovieList />} />
              </Route>
              <Route path="/all-movie" exact>
                <AntdLayout children={<AllMovie />} />
              </Route>
              <Route path="/create-movie" exact>
                <PageLayout children={<FormMovie />} />
              </Route>
              <Route path="/search-movie/:valueOfSearch" exact>
                <PageLayout children={<SearchPage />} />
              </Route>
              <Route path="/detail-movie/:ID_MOVIE" exact>
                <PageLayout children={<DetailMovie />} />
              </Route>
              <Route path="/edit-movie/:ID_MOVIE" exact>
                <PageLayout children={<FormMovieEdit />} />
              </Route>
              <Route path="/games-list" exact>
                <AntdLayout children={<GamesList />} />
              </Route>
              <Route path="/all-games" exact>
                <AntdLayout children={<AllGames />} />
              </Route>
              <Route path="/create-game" exact>
                <PageLayout children={<FormGame />} />
              </Route>
              <Route path="/detail-game/:ID_GAMES" exact>
                <PageLayout children={<DetailGames />} />
              </Route>
              <Route path="/edit-game/:ID_GAMES" exact>
                <PageLayout children={<FormGameEdit />} />
              </Route>
            </Switch>
          </GamesProvider>
        </MovieProvider>
      </LoginProvider>
    </Router>
  );
}

export default Routes;

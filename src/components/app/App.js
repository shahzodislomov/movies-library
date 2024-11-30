import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-from/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "empire of wenaco",
          viewers: "811",
          favourite: false,
          like: false,
        },
        {
          id: 2,
          name: "Jujutsu Kaisen",
          viewers: "890",
          favourite: false,
          like: false,
        },
        {
          id: 3,
          name: "Black Clover",
          viewers: "999",
          favourite: false,
          like: false,
        },
      ],
      term: "",
      filter: "",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
      filter: "all",
    };
    this.setState(({ data }) => ({
      data: [...data, item],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  SearchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((item) => item.like);
      case "mostViewers":
        return arr.filter((item) => item.viewers > 800);
      default:
        return arr;
    }
  };

  updateTermHandler = (term) => this.setState({ term });
  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMovies = data.length;
    const favouriteMovieCount = data.filter((item) => item.favourite).length;
    const visibleData = this.filterHandler(
      this.SearchHandler(data, term),
      filter
    );
    return (
      <div className="App font-monospace">
        <div className="content">
          <AppInfo
            allMovies={allMovies}
            favouriteMovieCount={favouriteMovieCount}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter
              filter={filter}
              updateFilterHandler={this.updateFilterHandler}
            />
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;

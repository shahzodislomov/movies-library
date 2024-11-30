import { Component } from "react";
import "./movies-add-form.css";
import { v4 as uuidv4 } from "uuid";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: 0,
    };
  }
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.name,
      viewers: this.state.views,
      id: uuidv4(),
    });
    this.setState({
      name: "",
      views: "",
    });
  };
  render() {
    const { name, views } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi Kino Qo'shish</h3>
        <form className="add-from d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday Kino"
            onChange={this.changeHandlerInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechchi Marotaba Ko'rilgan?"
            onChange={this.changeHandlerInput}
            name="views"
            value={this.state.views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;

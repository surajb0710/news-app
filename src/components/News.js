import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
    this.baseUrl =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fd8cb7a3ad48491ba610ffe1ca7af717";
    // this.baseUrl = props.pageUrl;
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  async fetchArticles(page = 1, pageSize = this.props.pageSize) {
    this.setState({ loading: true });
    let url = `${this.baseUrl}&page=${page}&pageSize=${pageSize}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        page: page,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
      // Handle error state if needed
    }
  }

  handleLeftClick = async () => {
    this.setState({ loading: true });
    const { page } = this.state;
    if (page > 1) {
      await this.fetchArticles(page - 1);
      this.setState({ loading: false });
    }
  };

  handleRightClick = async () => {
    this.setState({ loading: true });
    const { page, totalResults } = this.state;
    const maxPages = Math.ceil(totalResults / this.props.pageSize);
    if (page < maxPages) {
      await this.fetchArticles(page + 1);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> Latest News</h1>
        <div>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  {<Spinner /> && (
                    <NewsItem
                      title={element.title ? element.title.slice(0, 48) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  )}
                </div>
              ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark btn-sm"
              onClick={this.handleLeftClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark btn-sm"
              onClick={this.handleRightClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

News.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      newsUrl: PropTypes.string,
    })
  ),
};

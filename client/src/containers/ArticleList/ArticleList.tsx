import React from 'react';

import { Category } from '../../types/article.types';
import './ArticleList.css';
import ArticleItem from './ArticleCard';

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(
      JSON.stringify({
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    };
  }

  render() {
    return (
      <div className="articles">
        {this.state.categories.map((category) => {
          return category.categoryArticles.articles.map((article) => {
            return <ArticleItem article={article} />;
          });
        })}
      </div>
    );
  }
}

export default ArticleList;

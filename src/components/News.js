import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'; // Importing NewsItem component
import PropagateLoader from "react-spinners/PropagateLoader"; // Loader for loading state

const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
const News = (props) => {
  const { setProgress, apiKey, pageSize, country, category } = props;
  
  // States to hold news articles and loading state
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching the news articles from the API
  const fetchNews = async () => {
    setLoading(true);
    setProgress(30);

    const url = `https://api.currentsapi.services/v1/latest-news?category=${category}&language=en&page_size=${pageSize}&apiKey=${apiKey}&country=${country}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProgress(70);
      if (data.news && data.news.length > 0) {
        setArticles(data.news);
      } else {
        setArticles([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching news:', error);
    }
    setProgress(100);
  };

  useEffect(() => {
    fetchNews();
  }, [category, apiKey, pageSize, country]);

  return (
    <div className="container my-3">
      {/* <h2 className="text-center">Top Headlines on {props.category}</h2> */}
      <h1 className="text-center" style={{ margin: "40px 0px", marginTop: "90px" }}>
  Top <span style={{ color: 'red' }}>{capitalizeFirstLetter(props.category)}</span> Headlines
</h1>

      {/* Show loading spinner while news is being fetched */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <PropagateLoader color={"#36d7b7"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="row">
          {/* Map over articles and render NewsItem for each article */}
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem 
                  title={article.title} 
                  description={article.description} 
                  imageUrl={article.image}  
                  newsUrl={article.url} 
                  author={article.author}
                  date={article.published || new Date()}
                  source={article.source ? article.source.name : ''}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h4>No news articles available. Please try again later.</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default News;


import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function News(props) {
  // const apiKey = 578c388664a144e8b6918f365f485203
  // const apiKey = a8541afbb55c49cb8370b1ab54182760
  const [article, setArticle] = useState([])
  const [totalResults,setTotalResults] = useState(0)
  const [page,setpage] = useState(1)

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a8541afbb55c49cb8370b1ab54182760&page=${page}&pageSize=10`;
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    setArticle(article.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setpage(1);
    props.setProgress(100);
  }
  const fetchMoreData = async () =>{
    setTimeout( async () =>{
      setpage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a8541afbb55c49cb8370b1ab54182760&page=${page+1}&pageSize=10`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticle(article.concat(parsedData.articles));
    },1000)
    
  }
  const capital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  useEffect(() => {
    update();
  }, [])
  return (
    <div style={{ height:"70%" ,marginBottom: "30px", marginTop: "0px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <div><h1 style={{ fontFamily: "'Kanit', sans-serif", color: "#F2CD5C", fontSize: "2.5rem" }}>{`Headlines from ${capital(props.category)} Category`}</h1></div>
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={<Spinner/>}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}
        >
          {article.map((element) => {
            return (<Newsitem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />)
          })}
        </InfiniteScroll>

      </div>
    </div>
  )
}

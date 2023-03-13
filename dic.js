const  business=document.getElementById("business");
const  Sports=document.getElementById("Sports");
const  Entertainment=document.getElementById("Entertainment");
const  Weather=document.getElementById("Weather");
const  Technology=document.getElementById("Technology");
const  Search=document.getElementById("searchbtn");
const  newsquery=document.getElementById("newsQuery");
const  newsType=document.getElementById("newsType");
const  newsdetails=document.getElementById("newsdetails");
const api_key="";
const headliness_news="https://newsapi.org/v2/top-headlines?country=in&apiKey="
const business_news="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const sports_news="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const entertainment_news="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const weather_news="https://newsapi.org/v2/top-headlines?country=in&category=weather&apiKey=";
const technology_news="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
var newsDataArr=[];
window.onload=function()
{
newsType.innerHTML="<h4>Headlines</h4>";
fetchheadlines();

};
business.addEventListener("click",function()
{
  newsType.innerHTML="<h4>Business News</h4>";
  fetchbusinessnews();
});
Sports.addEventListener("click",function()
{
  newsType.innerHTML="<h4>Sports News</h4>";
  fetchsportsnews();
});
Entertainment.addEventListener("click",function()
{
  newsType.innerHTML="<h4>Entertainment News</h4>";
  fetchentertainmentnews();
});
Technology.addEventListener("click",function()
{
  newsType.innerHTML="<h4>Technology news</h4>";
  fetchtechnologynews();
});
const fetchheadlines=async()=>
{
  const response=await fetch(headliness_news+api_key);
  newsDataArr=[];
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
 console.log(myjson);
  }
  else
  {
    console.log(response.status,response.statusText);
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
const fetchbusinessnews=async()=>
{
  const response=await fetch(business_news+api_key);
  newsDataArr=[];
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
 console.log(myjson);
  }
  else
  {
    console.log(response.status,response.statusText);
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
const fetchsportsnews=async()=>
{
  newsDataArr=[];
  const response=await fetch(sports_news+api_key);
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
 console.log(myjson);
  }
  else
  {
    console.log(response.status,response.statusText);
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
const fetchentertainmentnews=async()=>
{
  newsDataArr=[];
  const response=await fetch(entertainment_news+api_key);
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
 console.log(myjson);
  }
  else
  {
    console.log(response.status,response.statusText);
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
const fetchtechnologynews=async()=>
{
  newsDataArr=[];
  const response=await fetch(technology_news+api_key);
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
 console.log(myjson);
  }
  else
  {
    console.log(response.status,response.statusText);
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
const fetchQuerynews=async()=> {
  if(newsquery.value==Null)
  return;
  
  newsDataArr=[];
  const response=await fetch(searchnews+encodeURIComponent(newsquery.value)+"&apiKey="+api_key);
  if(response.status>=200 && response.status<300)
  {
 const myjson=await response.json();
 newsDataArr=myjson.articles;
  }
  else
  {
    console.log(response.status,response.statusText)
    newsDataArr.innerHTML="<h5>No data found.</h5>";
    return;
  }
  displayNews();
}
function displayNews()
{
  newsdetails.innerHTML="";

  newsDataArr.forEach(news=>
    {
      var date=news.publishedAt.split("T")
      var col=document.createElement('div');
      col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
      var card=document.createElement('div');
      card.className="p-2";
      var image=document.createElement('img');
      image.setAttribute("height","matchparnt");
      image.setAttribute("width","100%");
      image.src=news.urlToImage;
      var cardBody=document.createElement('div');
      var newsHeading=document.createElement('h5');
      newsHeading.className="card-title";
      newsHeading.innerHTML=news.title;
      var dateHeading=document.createElement('h6');
      dateHeading.className="text-primary";
      dateHeading.innerHTML=date[0];
      var discription=document.createElement('p');
      discription.className="text-muted";
      discription.innerHTML=news.discription;
      var link=document.createElement('a');
      link.className="btn btn-dark";
      link.setAttribute("target","_blank");
      link.href=news.url;
      link.innerHTML="Read more";
      cardBody.appendChild(newsHeading);
      cardBody.appendChild(dateHeading);
      cardBody.appendChild(discription);
      cardBody.appendChild(link);
      card.appendChild(image);
      card.appendChild(cardBody);
      col.appendChild(card)
   newsdetails.appendChild(col);
      })
}

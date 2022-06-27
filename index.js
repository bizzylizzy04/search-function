// Import stylesheets
import "./style.css";
import { searchData } from "./searchData";


// GOAL: console.log search results from searchData.js based on a search query
// HINT: Use .includes() function to find words in text
// HINT: Use the searchData from above and search from within the "title" and "snippet" attribute
function search(searchQuery) {
  // Enter code here
  for (let searchItem of searchData.organic_results){
    if(searchItem.title.includes(searchQuery) || searchItem.snippet.includes(searchQuery)) {
      console.log(searchItem);
    }
  }
}


// search("tea")
// search("coffee")
// search("react")
search("JavaScript")

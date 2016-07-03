// function to defining response to JSONP object
// and how to handle it. This is to avoid cross-domain
// ajax errors
function jsonCallback(json){
  print(json);
}

// gets data from an api on the web on web/design related quotes
function fetch() {
$.ajax({
  url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=jsonCallback",
  dataType: "jsonp"
});
}

// modifies html on page to display quote and author
function print(obj) {
  document.getElementById("quote").innerHTML = obj[0].content;
  document.getElementById("auth").innerHTML = obj[0].title;
}

// call function on runtime/initial page load
fetch();

// need to learn how to customize tweet button content

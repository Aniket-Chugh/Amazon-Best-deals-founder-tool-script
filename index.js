  
 function searchDeals(event) {
    event.preventDefault(); // prevent the default form submission behavior

    // Retrieve the user input values
    var product = document.getElementById("product").value;
    var type = document.getElementById("type").value;
    var min_price = document.getElementById("min_price").value;
    var max_price = document.getElementById("max_price").value;

    // Define an array of objects containing information about each website and their affiliate link
    var websites = [
      {name: "Amazon", url: "https://www.amazon.com/s?k=", params: "&rh=n%3A", affiliate: ""},

      // add more websites here
    ];

    // Loop through the array of websites and create a search URL for each website
    for (var i = 0; i < websites.length; i++) {
      var website = websites[i];
      var search_url = website.url + product + website.params + type + "&low-price=" + min_price + "&high-price=" + max_price + website.affiliate;

      // Redirect the user to the search URL for the current website
      window.open(search_url, "_blank");
    }
  }

  // this source code is made by oneaniket13@gmail.com
import React from "react";
import AlgoliaPlaces from "algolia-places-react";

class Search extends React.Component {
  render() {
    return (
      <div id="search">
        <AlgoliaPlaces
          placeholder="Search"
          options={{
            appId: "plWR9LXC4IET",
            apiKey: "c8bf06b7c614448df954c9cc7c43157c",
            language: "eng",
            type: "city",
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={(suggestion) => console.log(suggestion)}
          onLimit={() => console.log("Limit Reached!")}
          onError={() => console.log("Error!")}
          onLocate={() => console.log("coords")}
        />
      </div>
    );
  }
}

export default Search;

/*
onSuggestions={{}}
        onCursorChanged={{}}
        onClear={{}}
        
        locat
*/

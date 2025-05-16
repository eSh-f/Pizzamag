import React, { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      🔍
      <div>
        <input value={searchText} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Search;

import { Input } from "antd";
import { useState } from "react";

function Search2({foodList, callback}) {
  const [keyword, setKeyword] = useState("");

  const handleWord = (event) => {
    setKeyword(event.target.value);
    search();
  }

  function search() {
    let filteredFoods = foodList.filter((food) => {
      return food.name.includes(keyword);
    });
    callback(filteredFoods);
  }

  return (
    <div style={{margin: "20px auto", width: "500px"}}>
      <label>Search</label>
      <Input
        onChange={handleWord}
        placeholder="Search"
        type="text"
      />
    </div>
  );
}

export default Search2;

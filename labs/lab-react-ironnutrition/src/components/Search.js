import { Input } from "antd";
import { useState } from "react";


function Search({searchFunction}) {
  const [term, setTerm] = useState('');

  function handleChange(event) {
    setTerm(event.target.value);
    searchFunction(term);
  }

  return (
    <Input
      onChange={handleChange}
      type="text"
      value={term}
    />
  )
}

export default Search;
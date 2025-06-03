import s from "./SearchBox.module.css";

const SearchBox = ({ handleChangeFilter }) => {
  return <input onChange={(e) => handleChangeFilter(e.target.value)} />;
};

export default SearchBox;

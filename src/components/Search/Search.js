import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = ({ onSubmit }) => {
  const [input, setInput] = React.useState("");
  return (
    <>
      <input
        className={styles.field}
        type="text"
        value={input}
        placeholder="search"
        onChange={e => setInput(e.target.value)}
      />
      <button className={styles.button} onClick={() => onSubmit(input)}>
        <FaSearch size="15px" />
      </button>
    </>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Search;

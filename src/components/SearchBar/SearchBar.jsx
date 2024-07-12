import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter to search word!");
    }
    onSubmit(input.toLowerCase());
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          value={input}
          placeholder="Search images and photos"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={css.btn} type="submit">
          <PiMagnifyingGlassDuotone className={css.svg} />
        </button>
      </form>
      <Toaster position="top-center" />
    </header>
  );
};

export default SearchBar;

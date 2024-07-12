import { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") {
      toast.error("Please enter a search word!");
      return;
    }
    onSubmit(input.toLowerCase());
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
          onChange={handleChange}
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

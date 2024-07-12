import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { unsplashAPI } from "./api/unsplashAPI.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(null);

  const setDataResp = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const resp = await unsplashAPI(query, page);
      setData((prev) => [...prev, ...resp]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query) {
      setDataResp();
    }
  }, [query, page, setDataResp]);

  const submitForm = (searchQuery) => {
    setQuery(searchQuery);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const closeModal = () => {
    setIsOpen(null);
  };

  const openModal = (data) => {
    setIsOpen(data);
  };

  return (
    <>
      <SearchBar onSubmit={submitForm} />
      {error && <ErrorMessage />}
      <ImageGallery list={data} onImageClick={openModal} />
      {loading && <Loader />}
      {data.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={Boolean(modalIsOpen)}
        onRequestClose={closeModal}
        item={modalIsOpen}
      />
    </>
  );
};

export default App;

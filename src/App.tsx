import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { unsplashAPI } from "./api/unsplashAPI.ts";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.tsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.tsx";
import Loader from "./components/Loader/Loader.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import ImageModal from "./components/ImageModal/ImageModal.tsx";
import { UnsplashPhoto } from "./api/unsplashAPI.ts";

const App: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<UnsplashPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<UnsplashPhoto | null>(null);

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

  const submitForm = (searchQuery: string) => {
    setQuery(searchQuery);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setIsOpen(null);
  };

  const openModal = (data: UnsplashPhoto) => {
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

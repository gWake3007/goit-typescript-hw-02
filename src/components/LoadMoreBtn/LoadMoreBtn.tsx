import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleLoadMore: () => void,
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.loadMoreBtn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

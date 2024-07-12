import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <div className={css.card}>
      <img
        onClick={() => onImageClick(item)}
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

ImageCard.propTypes = {
  item: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;

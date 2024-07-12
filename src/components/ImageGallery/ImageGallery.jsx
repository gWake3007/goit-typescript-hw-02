import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ list, onImageClick }) => (
  <ul className={css.list}>
    {list.map((item) => (
      <li key={item.id}>
        <ImageCard item={item} onImageClick={onImageClick} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

import css from "./ImageCard.module.css";
import { UnsplashPhoto } from "../../api/unsplashAPI";

interface ImageCardProps {
  item: UnsplashPhoto;
  onImageClick: (item: UnsplashPhoto) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
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

export default ImageCard;

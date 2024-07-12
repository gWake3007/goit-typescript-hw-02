import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { UnsplashPhoto } from "../../api/unsplashAPI";

interface ImageGalleryProps {
  list: UnsplashPhoto[];
  onImageClick: (item: UnsplashPhoto) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ list, onImageClick }) => (
  <ul className={css.list}>
    {list.map((item) => (
      <li key={item.id}>
        <ImageCard item={item} onImageClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;

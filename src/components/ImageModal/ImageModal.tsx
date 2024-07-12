import { useEffect } from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { AiFillLike } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { UnsplashPhoto } from "../../api/unsplashAPI";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item?: UnsplashPhoto | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  item,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button className={css.btn} type="button" onClick={onRequestClose}>
        <IoMdClose />
      </button>
      <div className={css.containerImg}>
        <img
          src={item?.urls?.regular}
          alt={item?.alt_description}
          className={css.img}
        />
      </div>
      <div className={css.container}>
        <div className={css.likes}>
          <AiFillLike />
          <p>{item?.likes}</p>
        </div>
        <div className={css.user}>
          <FaUserCircle />
          <p>{item?.user?.name}</p>
        </div>
      </div>
      <p className={css.description}>{item?.alt_description}</p>
    </Modal>
  );
};

export default ImageModal;

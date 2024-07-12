import css from "./ImageModal.module.css";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { AiFillLike } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, item }) => {
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

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default ImageModal;

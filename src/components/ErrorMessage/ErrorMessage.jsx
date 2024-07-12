import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p>
        <b className={css.error}>
          Whoops, something went wrong! Please try reloading this page!
        </b>
      </p>
    </>
  );
};

export default ErrorMessage;

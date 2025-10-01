import "./MyModal.css";
function MyModal({ children, active, setActive, title }) {
  return (
    <div
      className={active ? "modal_overlay active" : "modal_overlay"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className="modal_content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="title">{title}</h2>
        {children}
        <button
          className="btn"
          onClick={() => {
            setActive(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default MyModal;

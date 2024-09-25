import "./Modal.css";

export function Modal({ children, openCreate, onClose }) {
  if (openCreate) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {children}
          <button className="close" type="button" onClick={onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
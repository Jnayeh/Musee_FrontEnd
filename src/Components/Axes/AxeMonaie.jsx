import React from "react";
import CenteredModal from "Components/Modal/CenteredModal";
import MonnaieContext from "Services/MonnaieContext";
import "./Axe.css";
import Detail from "./AxeDetail/Detail";

function AxeMonaie() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalHistory, setModalHistory] = React.useState({
    id: 0,
    date: "unknown",
    title: "title",
    details: "Lorem",
  });
  const { historiqueMonnaies } = React.useContext(MonnaieContext);
  return (
    <div>
      {modalShow && (
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={modalHistory.title}
        >
          <p>{modalHistory.details}</p>
          <p>{modalHistory.details}</p>
          <p>{modalHistory.details}</p>
        </CenteredModal>
      )}
      <h4 className="axh2">Historique du Piéce en Tunisie</h4>
      <div className="container">
        <div className="timeline">
          <ul>
            {historiqueMonnaies.map((element) => (
              <li key={element.id}>
                <Detail
                  history={element}
                  show={() => {
                    setModalShow(true);
                    setModalHistory(element);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AxeMonaie;
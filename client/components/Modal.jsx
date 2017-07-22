import React from 'react';


const Modal = ({ isOpen, children }) => (isOpen ?
  (
    <div style={styles.modal_overlay}>
      <div style={styles.modal_center_box}>
        { children }
      </div>
    </div>
  )
  :
  null);

export default Modal;


const styles = {

  modal_overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    zIndex: '9998',
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modal_center_box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '450px',
    height: '450px',
    zIndex: '9999',
    background: '#fff',
  },
};


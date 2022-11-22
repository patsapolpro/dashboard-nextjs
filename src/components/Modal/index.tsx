import React, { useState } from "react";
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody,
    CModalFooter } from '@coreui/react';
import { useApiContext } from "src/store/ApiContext";
import { MODAL_ACTION_TYPE, MODAL_TYPE } from "src/store/reducers/modalReducer";

const Model = () => {
    const [state, dispatch] = useApiContext();
    const { isOpen, title, message, onCancel, onConfirm, type, confirmLeftButtonText, multipleText } = state.modal;
  
    const closeModel = () => {
      dispatch({
        type: MODAL_ACTION_TYPE.CLOSE,
        payload: {
          type: MODAL_TYPE.ALERT
        }
      });
    }

    return (
        <>
          <CModal visible={isOpen}>
            <CModalHeader>
              <CModalTitle>Confirm</CModalTitle>
            </CModalHeader>
            <CModalBody>
              Do you want to send request?
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={closeModel} >
                Close
              </CButton>
              <CButton color="primary">Confrim</CButton>
            </CModalFooter>
          </CModal>
        </>
    )
}

export default Model;
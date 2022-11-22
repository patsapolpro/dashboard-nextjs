import React, { useState } from "react";
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody,
    CModalFooter } from '@coreui/react';
import { useApiContext } from "src/store/ApiContext";
import { MODAL_ACTION_TYPE, MODAL_TYPE } from "src/store/reducers/modalReducer";
import { SSI_ACTION_TYPE } from "src/store/reducers/ssiReducer";
import Router from "next/router";

const Model = (props) => {
    const [state, dispatch] = useApiContext();
    const { isOpen, isSuccess } = state.modal;
  
    const closeModel = () => {
      dispatch({
        type: MODAL_ACTION_TYPE.CLOSE,
        payload: {
          type: MODAL_TYPE.ALERT
        }
      });
    }

    const callSSI = () => {
      dispatch({
        type: SSI_ACTION_TYPE.SSI_SEND_REQUEST_SUCCESS,
        payload: props.json
      })

      dispatch({
        type: MODAL_ACTION_TYPE.CLOSE,
        payload: {
          type: MODAL_TYPE.ALERT
        }
      });

      dispatch({
        type: MODAL_ACTION_TYPE.OPEN_SUCESSS,
        payload: {
          type: MODAL_TYPE.ALERT
        }
      });
    }

    const reload = () => {
      Router.reload();
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
              <CButton color="primary" onClick={callSSI}>Confrim</CButton>
            </CModalFooter>
          </CModal>
          <CModal visible={isSuccess}>
              <CModalHeader>
              < CModalTitle>Result</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Issue Credential Successfully
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={reload} >
                  Close
                </CButton>
              </CModalFooter>
          </CModal>
          <></>
        </>
    )
}

export default Model;
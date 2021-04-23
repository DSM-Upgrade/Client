import React from "react";

import {
  modalActions,
  modalActionCreaters,
} from "../../../../module/action/modal";
import modalReducer from "../../../../module/reducer/modal";

import FineModalContainer from "../../../../container/Modal/FineModalContainer/FineModalContainer";

describe("modal reducer", () => {
  const { SHOW_MODAL, DROP_MODAL, SET_ERROR } = modalActions;
  const { showModal, dropModal, setError } = modalActionCreaters;

  it.each`
    action        | actionCreater | payload
    ${SHOW_MODAL} | ${showModal}  | ${"payload"}
    ${DROP_MODAL} | ${dropModal}  | ${"payload"}
    ${SET_ERROR}  | ${setError}   | ${{ state: "state?", text: "text!" }}
  `(
    "actionCreater create action truthy",
    ({ action, actionCreater, payload }) => {
      const expectedAction = {
        type: action,
        payload,
      };

      expect(actionCreater(payload)).toEqual(expectedAction);
    }
  );

  context("modal reducer", () => {
    it("initialState is truthy", () => {
      expect(modalReducer(undefined, {})).toEqual({
        isShow: false,
        error: {
          state: false,
          text: "",
        },
        modalElement: null,
      });
    });

    it("SHOW_MODAL", () => {
      expect(
        modalReducer(undefined, {
          type: SHOW_MODAL,
          payload: FineModalContainer,
        })
      ).toEqual({
        isShow: true,
        error: {
          state: false,
          text: "",
        },
        modalElement: FineModalContainer,
      });
    });

    it("DROP_MODAL", () => {
      expect(
        modalReducer(
          {
            isShow: true,
            error: {
              state: false,
              text: "",
            },
            modalElement: FineModalContainer,
          },
          {
            type: DROP_MODAL,
            payload: undefined,
          }
        )
      ).toEqual({
        isShow: false,
        error: {
          state: false,
          text: "",
        },
        modalElement: null,
      });
    });

    it("SET_ERROR", () => {
      expect(
        modalReducer(undefined, {
          type: SET_ERROR,
          payload: { state: true, text: "text!" },
        })
      ).toEqual({
        isShow: false,
        error: {
          state: true,
          text: "text!",
        },
        modalElement: null,
      });
    });
  });
});

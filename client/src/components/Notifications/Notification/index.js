import React, { useState, useReducer } from 'react'
import { Alert } from 'reactstrap';

function notificationReducer(state, action) {
  switch (action.code) {
    case '404': {

    }
    case '500': {

    }
    default: break;
  }
}

export default function Notification({ type, message}) {
  const [state, dispatch] = useReducer(notificationReducer, initialState)
  return (
  <Alert color={color}>{message}</Alert>
  )
}
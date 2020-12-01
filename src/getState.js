import React, {useState, useEffect} from 'react';

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('counterData');
      if (serializedState === null) {
        return undefined;
      }
      let parsedStore = JSON.parse(serializedState);
      return parsedStore;
    } catch (err) {
      return undefined;
    }
  }; 
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('counterData', serializedState);
    } catch {
    }
  };
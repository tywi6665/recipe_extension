import React from 'react';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import './App.css';

function App() {
  return (
    <FirebaseDatabaseProvider>
      <p>This is Firebase</p>
    </FirebaseDatabaseProvider>
  );
}

export default App;

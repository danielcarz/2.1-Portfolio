import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';


import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_Spanish from './Translations/English/global.json';
import global_English from './Translations/Spanish/global.json';

//interpolation
i18next.init( {
  interpolation : { escapeValue: false },

  lng: "es",

  resources: {
    es: {
      global: global_Spanish
    },

    en: {
      global: global_English
    }
  }
 } );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <I18nextProvider i18n={ i18next }>

      <App />

    </I18nextProvider>

  </React.StrictMode>,
)

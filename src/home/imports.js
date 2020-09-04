 // Add constants for all other JS files here to keep html file clean




 const fs = require('fs')
 const {
     ipcRenderer,
     electron
 } = require('electron');
 const dialog = require('electron').remote.dialog;
 const {
     BrowserWindow,
     app
 } = require('electron').remote;

 const path = require('path');
 const {
     readdirSync,
     readdir,
     statSync,
     existsSync
 } = require('fs')
 const join = require('path')

 const closeApp = document.getElementById('exitApp');
 const stats = require('stats-lite');
 const ss = require('simple-statistics');
 const settings = require('electron').remote.require('electron-settings');
 const shell = require('electron').shell
 const {
     getCurrentWindow,
     globalShortcut
 } = require('electron').remote;
 var fileUrl = require('file-url');
 var p = settings.get('database.location');
 var Chart = require('chart.js');
 var Papa = require('papaparse');
 const open = require('open');
 var flatten = require('flat')
 const _ = require('lodash')
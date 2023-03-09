const { app, BrowserWindow, ipcMain } = require('electron'); // electron
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');
const sqlite3 = require('sqlite3');

let mainWindow;

const db = new sqlite3.Database(
    isDev
      ? path.join(__dirname, '../db/prefs.db') // my root folder if in dev mode
      : path.join(process.resourcesPath, 'db/prefs.db'), // the resources path if in production build
    (err) => {
      if (err) {
        console.log(`Database Error: ${err}`);
      } else {
        console.log('Database Loaded');
      }
    }
  );

const initDB = () => {
  db.run(`CREATE TABLE IF NOT EXISTS player (
    ID TEXT,
    first_name TEXT,
    last_name TEXT
  )`);
}

// Initializing the Electron Window
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900, // width of window
    height: 700, // height of window
    webPreferences: {
      // The preload file where we will perform our app communication
      preload: isDev 
        ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
        : path.join(app.getAppPath(), './build/preload.js'), // Loading it from the build folder for production
      worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
    },
  });

	// Loading a webpage inside the electron window we just created
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000' // Loading localhost if dev mode
      : `file://${path.join(__dirname, '../build/index.html')}` // Loading build file if in production
  );
	// Setting Window Icon - Asset file needs to be in the public/images folder.
  mainWindow.setIcon(path.join(__dirname, 'images/smile.ico'));

	// In development mode, if the window has loaded, then load the dev tools.
  if (isDev) {
    mainWindow.webContents.on('did-frame-finish-load', () => {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    });
  }
};

// When the app is ready to load
app.whenReady().then(async () => {
  initDB();
  ipcMain.handle('create-player', async (event, args) => {
    try {
      // insert a new row into the player table
        db.run(`INSERT INTO player (ID, first_name, last_name) VALUES (?, ?, ?)`,
          [args.id, args.first_name, args.last_name],
          (err) => {
            if (err) {
              console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          }
        );
      return 'success';
    } catch (error) {
      return error;
    }
  });
  ipcMain.handle('get-all-players', async (event, args) => {
    try {
      let rows = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM player`, (err, rows) => {
          if (err) {
            reject(err.message);
          }
          resolve(rows);
        });
      });
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve users');
    }
  });
  await createWindow(); // Create the mainWindow
});

// Exiting the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Activating the app
app.on('activate', () => {
  if (mainWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Logging any exceptions
process.on('uncaughtException', (error) => {
  console.log(`Exception: ${error}`);
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


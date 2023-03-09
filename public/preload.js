const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    createPlayer: (args) => ipcRenderer.invoke('create-player',args),
    getAllPlayers: (args) => ipcRenderer.invoke('get-all-players',args)
});
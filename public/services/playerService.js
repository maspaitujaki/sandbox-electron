const { db } = require('./../db');

const getPlayerTableLength = async () =>{
    try {
        const length = await new Promise((resolve, reject) => {
            db.get(`SELECT COUNT(*) AS length FROM player`, function(error,row) {
            if (error) {
                reject(error);
            } else {
                resolve(row.length);
            }
            });
        });
        return length;
    } catch (error) {
      console.error(error);
      return null;
    }
}

const playerServices = [
    {
        event : 'create-player',
        callback : async (event, args) => {
            try {
                let id;
                if (args.id === ''){
                    const l = await getPlayerTableLength()
                    id = 'P' + l.toString()
                } else id = args.id;
                const result = await new Promise((resolve, reject) => {
                    db.run(`INSERT INTO player (player_id, first_name, last_name) VALUES (?, ?, ?)`,
                    [id, args.first_name, args.last_name], function(error) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ id: this.lastID });
                    }
                    });
                });
                return result;
            } catch (error) {
              console.error(error);
              return { id: null };
            }
          }
    },
    {
        event: 'get-all-players',
        callback : async (event, args) => {
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
          }
    }
]

module.exports = {playerServices}
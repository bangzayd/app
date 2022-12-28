const mysql = require("mysql");

// Konfigurasi koneksi nodejs ke mysql
let dbCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ade",
});

// Membuat koneksi nodejs ke mysql
dbCon.connect((err) => {
  if (err) {
    console.log("Membuat koneksi nodejs ke mysql gagal", err);
  } else {
    console.log("Membuat koneksi nodejs ke mysql berhasil ");
  }
});

module.exports = dbCon;

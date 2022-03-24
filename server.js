const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./controller/userController");
const addressesController = require("./controller/addressesController");

app.listen(PORT);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/user/name/:id", userController.name);
app.get("/user/email/:id", userController.email);
app.get("/user/password/:id", userController.password);
app.get("/user/username/:id", userController.username);
app.get("/user/birth_date/:id", userController.birth_date);
app.get("/user/phone_number/:id", userController.phone_number);

app.get("/addresses/provinsi/:id", addressesController.provinsi);
app.get("/addresses/kota/:id", addressesController.kota);
app.get("/addresses/kabupaten/:id", addressesController.kabupaten);
app.get("/addresses/kecamatan/:id", addressesController.kecamatan);
app.get("/addresses/kelurahan_desa/:id", addressesController.kelurahan_desa);
app.get("/addresses/jalan/:id", addressesController.jalan);
app.get("/addresses/kode_pos/:id", addressesController.kode_pos);
app.get("/addresses/nama_alamat/:id", addressesController.nama_alamat);
app.get("/addresses/:id", addressesController.user_id);

console.log(`Server is running on http://localhost:${PORT}`);
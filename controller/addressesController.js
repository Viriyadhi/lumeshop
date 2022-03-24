const { addresses } = require("../models");
const { user } = require("../models");

exports.provinsi = (req, res) => {
    res.send("addresses.provinsi here");
};

exports.kota = (req, res) => {
    res.send("addresses.kota here");
};
exports.kabupaten = (req, res) => {
    res.send("addresses.kabupaten here");
};
exports.kecamatan = (req, res) => {
    res.send("addresses.kecamatan here");
};
exports.kelurahan_desa = (req, res) => {
    res.send("addresses.kelurahan_desa here");
};
exports.jalan = (req, res) => {
    res.send("addresses.jalan here");
};
exports.kode_pos = (req, res) => {
    res.send("addresses.kode_pos here");
};

exports.nama_alamat = (req, res) => {
    res.send("addresses.nama_alamat here");
};
exports.user_id = (req, res) => {
    addresses
        .findAll({
            attributes: ["name"],
            where: {
                user_id: req.params.id,
            },
            attributes: ["user_id"],
            where: {
                id: req.params.id,
            },
        })
        .then((data) => {
            res.send(data);
        });
};
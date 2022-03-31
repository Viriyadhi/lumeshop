const { user } = require("../models");

// exports.name = (req, res) => {
//     user
//         .findAll({
//             attributes: ["name"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.email = (req, res) => {
//     user
//         .findAll({
//             attributes: ["email"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.password = (req, res) => {
//     user
//         .findAll({
//             attributes: ["password"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.username = (req, res) => {
//     user
//         .findAll({
//             attributes: ["username"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.birth_date = (req, res) => {
//     user
//         .findAll({
//             attributes: ["birth_date"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

// exports.phone_number = (req, res) => {
//     user
//         .findAll({
//             attributes: ["phone_number"],
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((data) => {
//             res.send(data);
//         });
// };

exports.all = (req, res) => {
    user.findAll().then((data) => {
        res.send(data);
    });
};

exports.findById = (req, res) => {
    user.findByPk(req.params.id).then((data) => {
        if (data) {
            res.send(data);
        } else
            res
            .status(400)
            .json({ msg: `No address with the id of ${req.params.id}` });
    });
};

exports.create = (req, res) => {
    const newUser = {
        name: req.fields.name,
        email: req.fields.email,
        password: req.fields.password,
        username: req.fields.username,
        birth_date: req.fields.birth_date,
        phone_number: req.fields.phone_number,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    if (!newUser.name ||
        !newUser.email ||
        !newUser.password ||
        !newUser.username ||
        !newUser.birth_date ||
        !newUser.phone_number
    ) {
        return res.status(400).json({ msg: "Please fill all the requirements" });
    }
    user.create(newUser).then((data) => {
        res.send(data);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    user.findByPk(id).then((data) => {
        if (data) {
            data
                .update({
                    name: req.fields.name,
                    email: req.fields.email,
                    password: req.fields.password,
                    username: req.fields.username,
                    birth_date: req.fields.birth_date,
                    phone_number: req.fields.phone_number,
                })
                .then((data) => {
                    res.send(data);
                });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    user.findByPk(id).then((data) => {
        if (data) {
            user
                .destroy({
                    where: {
                        id: id,
                    },
                })
                .then(() => {
                    res.send(`The user with the id of ${id} has been deleted`);
                });
        } else {
            res
                .status(404)
                .json({ msg: `No user found with the id of  ${req.params.id}` });
        }
    });
};
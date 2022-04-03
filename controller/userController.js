const { user } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { now } = require("moment");
const moment = require("moment");

exports.all = (req, res) => {
    user
        .findAll({
            attributes: {
                exclude: ["password"],
            },
        })
        .then((data) => {
            res.send(data);
        });
};

exports.findById = (req, res) => {
    user
        .findByPk(req.params.id, {
            attributes: {
                exclude: ["password"],
            },
        })
        .then((data) => {
            if (data) {
                res.send(data);
            } else
                res
                .status(400)
                .json({ msg: `No address with the id of ${req.params.id}` });
        });
};

exports.create = (req, res) => {
    user
        .findOne({
            where: {
                email: req.fields.email,
            },
        })
        .then((data) => {
            if (data) {
                return res
                    .status(400)
                    .json({ msg: `Email ${req.fields.email} already in use` });
            } else {
                const validateEmail = (email) => {
                    return String(email)
                        .toLowerCase()
                        .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"] +)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        );
                };
                const validatePassword = (password) => {
                    return String(password).match(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
                    );
                };

                if (validateEmail(req.fields.email)) {
                    bcrypt.hash(req.fields.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).send({
                                msg: err,
                            });
                        } else {
                            const newUser = {
                                name: req.fields.name,
                                email: req.fields.email,
                                password: hash,
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
                                return res
                                    .status(400)
                                    .json({ msg: "Please fill all the requirements" });
                            }
                            user.create(newUser).then((data) => {
                                res.status(201).send({
                                    msg: "New user has been registerd !",
                                });
                            });
                        }
                    });
                } else {
                    return res
                        .status(400)
                        .json({ msg: "Please input a valid email structure" });
                }
                if (!validatePassword(req.fields.password)) {
                    return res.status(400).json({
                        msg: "The password must at least 6 characters long, and must have at least  1 uppercase, and 1 number, and 1 lowercase",
                    });
                }
            }
        });
};

exports.login = (req, res) => {
    user
        .findOne({
            where: {
                email: req.fields.email,
            },
        })
        .then((data) => {
            // user does not exists
            if (!data) {
                return res.status(401).send({
                    msg: "Email or password is incorrect!",
                });
            } else {
                //check password
                bcrypt.compare(req.fields.password, data.password, (bErr, bdata) => {
                    // wrong password
                    if (!bdata) {
                        return res.status(401).send({
                            msg: "Email or password is incorrect!",
                        });
                    }
                    if (bdata) {
                        const token = jwt.sign({ id: data.id },
                            "the-super-strong-secrect", {
                                expiresIn: "1h",
                            }
                        );
                        data
                            .update({
                                where: {
                                    updatedAt: new Date(),
                                },
                            })
                            .then((data) => {
                                user
                                    .findByPk(data.id, {
                                        attributes: {
                                            exclude: ["password"],
                                        },
                                    })
                                    .then((data) => {
                                        res.status(200).json({
                                            msg: "Login Successful",
                                            token: "Bearer " + token,
                                            data: data,
                                        });
                                    });
                            });
                    }
                });
            }
        });
};

exports.auth = (req, res) => {
    if (!req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer") ||
        !req.headers.authorization.split(" ")[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "the-super-strong-secrect").then((data) => {
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

// exports.update = (req, res) => {
//   //validate password can not be the same password
//   user
//     .findOne({
//       where: {
//         password: req.fields.password,
//       },
//     })
//     .then((data) => {
//       if (data) {
//         return res
//           .status(400)
//           .json({ msg: `The new password can't be the same as old password` });
//       } else {
//         const validatePassword = (password) => {
//           return String(password).match(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
//           );
//         };
//         if (validatePassword(req.fields.password)) {
//           bcrypt.hash(req.fields.password, 10, (err, hash) => {
//             if (err) {
//               return res.status(500).send({
//                 msg: err,
//               });
//             } else {
//               let id = req.params.id;
//               user.findByPk(id).then((data) => {
//                 if (data) {
//                   data
//                     .update({
//                       name: req.fields.name,
//                       email: req.fields.email,
//                       password: req.fields.password,
//                       username: req.fields.username,
//                       birth_date: req.fields.birth_date,
//                       phone_number: req.fields.phone_number,
//                     })
//                     .then(() => {
//                       res.status(201).send({
//                         msg: `The user with the id of ${id} has been updated`,
//                       });
//                     });
//                 } else {
//                   res.status(404).json({
//                     msg: `User with the id of ${req.params.id} not found`,
//                   });
//                 }
//               });
//             }
//           });
//         }
//       }
//     });
// };

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
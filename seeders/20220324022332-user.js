"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        //make a dummy data for user
        await queryInterface.bulkInsert("users", [{
                name: "John Doe",
                email: "john@gmail.com",
                password: "123456",
                username: "johndoe",
                birth_date: "1996-12-12",
                phone_number: "08123456789",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Jane Doe",
                email: "jane@gmail.com",
                password: "123456",
                username: "janedoe",
                birth_date: "1996-11-11",
                phone_number: "08987654321",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    },
};
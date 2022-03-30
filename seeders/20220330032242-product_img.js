"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("product_imgs", [{
                product_img: "images/bg.png",
                product_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                product_img: "",
                product_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
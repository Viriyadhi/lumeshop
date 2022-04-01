"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("resellers", [{
                shoppe_link: "https://www.shoppe.id/",
                tokped_link: "https://www.tokopedia.com/",
                bukalapak_link: "https://www.bukalapak.com/",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                shoppe_link: "https://www.shoppe.id/2",
                tokped_link: "https://www.tokopedia.com/2",
                bukalapak_link: "https://www.bukalapak.com/2",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("resellers", null, {});
    },
};
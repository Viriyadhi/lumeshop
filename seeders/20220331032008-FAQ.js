"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("FAQs", [{
                question: "What is the difference between a coin and a coin pair?",
                answer: "A coin is a single cryptocurrency. A coin pair is a pair of coins that are traded together. For example, BTC/USD is a coin pair. The price of a coin pair is the price of the coin on the other side of the pair.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                question: "Siapakah developer di lumeshop?",
                answer: "Viriyadhi, dan Affan. Website ini dibuat oleh Viriyadhi dan Affan",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("FAQs", null, {});
    },
};
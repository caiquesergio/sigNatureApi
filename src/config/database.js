const hostUrl = 'signature.co14q5vvollv.us-east-1.rds.amazonaws.com';

module.exports = {
    dialect: 'postgres',
    host: hostUrl,
    port: 5432,
    username: 'andrekitano',
    password: '14719955lkloP',
    database: 'signaturedb',
    define: {
        timestamps: true,
        underscored: true,
    },
};
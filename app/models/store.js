module.exports = function (sequelize, DataTypes) {
    var Store = sequelize.define("Store", {
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    
})
return Store;
}
const VotoModel = (sequelize, Sequelize) => {
  /* Definizione della "tabella" Alunno */
  return sequelize.define(
    'Voto',
    {
      _id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      voto: {
        type: Sequelize.DataTypes.FLOAT,
      },
      _id_alunno: {
        type: Sequelize.DataTypes.UUID,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = VotoModel;

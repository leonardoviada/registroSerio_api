const AlunnoModel = (sequelize, Sequelize) => {
  /* Definizione della "tabella" Alunno */
  return sequelize.define(
    'Alunno',
    {
      _id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
      cognome: {
        type: Sequelize.DataTypes.STRING,
      },
      mail: {
        type: Sequelize.DataTypes.STRING,
      },
      _id_classe: {
        type: Sequelize.DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = AlunnoModel;

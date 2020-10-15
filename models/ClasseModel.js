const ClasseModel = (sequelize, Sequelize) => {
  /* Definizione della "tabella" Alunno */
  return sequelize.define(
    'Classe',
    {
      _id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      anno: {
        type: Sequelize.DataTypes.INTEGER,
      },
      sezione: {
        type: Sequelize.DataTypes.STRING,
      },
      spec: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = ClasseModel;

const MateriaModel = (sequelize, Sequelize) => {
  /* Definizione della "tabella" Alunno */
  return sequelize.define(
    'Materia',
    {
      _id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = MateriaModel;

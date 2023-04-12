const { Videogame } = require("../db");

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    await Videogame.destroy({ where: { id } });
    res.send("Juego eliminado con éxito!");
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteGame };

// const { Videogame } = require("../../db");

// const deleteGame = async (id) => {
//   const regexIdDb =
//     /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

//   if (regexIdDb.test(id)) {
//     await Videogame.destroy({
//       where: {
//         id,
//       },
//     });
//   }
// };

// module.exports = { deleteGame };
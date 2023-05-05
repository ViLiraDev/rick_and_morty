require("dotenv").config(); // process.env
const { User, Favorite } = require("../DB_connection");
const { use } = require("../app");
const STATUS_OK = 200;
const STATUS_ERROR = 404;

// let myFavorites = [];

// function handleFavorites(swap) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (swap) resolve(myFavorites);
//       reject("not found favorites");
//     }, 1000);
//   });
// }

async function postFav(req, res) {
  const { id, name, status, species, gender, origin, image, location, userId } =
    req.body;
  // body - > id del userId
  try {
    // console.log(":::::::::", id, name, image);
    if (!id || !name || !image) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "The require information is missing" });
    }
    const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      location,
    };
    const char = await Favorite.create(character);
    if (userId) {
      const user = await User.findByPk(userId);
      if (user) {
        // *******************************************
        // ACA SE CREA LA RELACION
        await user.addFavorite(char);
      }
    }
    const favorites = await Favorite.findAll();
    res.status(STATUS_OK).json(favorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}
async function deleteFav(req, res) {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(STATUS_ERROR).json({ message: "id not found" });
    }
    // const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
    const char = await Favorite.findByPk(id);
    if (char) {
      await Favorite.destroy({
        where: {
          id,
        },
      });
    }
    const favorites = await Favorite.findAll();
    res.status(STATUS_OK).json(favorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}

module.exports = {
  postFav,
  deleteFav,
};
/*
Crea una función llamada postFav que reciba por parámetro los objetos req y res.
Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por Body.
Finalmente devuelve tu arreglo de favoritos en formato JSON.
Crea una función llamada deleteFav que reciba por parámetro los objetos req y res.
Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo id que recibes por Params.
Finalmente devuelve tu arreglo de favoritos en formato JSON.

Exporta ambas funciones.
*/

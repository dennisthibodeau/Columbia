const fetch = require("node-fetch");
const states = require("./data/stateParks.json");

const getAllParks = (req, res) => {
  res.status(200).json({ status: 200, data: states });
};

const getSinglePark = (req, res) => {
  const { id } = req.params;
  let stateArr = [];

  states.forEach((state) => {
    if (state.id === id) {
      stateArr.push(state);
    }
  });
  if (stateArr.length === 0) {
    res.status(400).json({ status: "error", error: "State not found" });
  } else {
    res.status(200).json({ status: 200, state: stateArr });
  }
};

module.exports = {
  getAllParks,
  getSinglePark,
};

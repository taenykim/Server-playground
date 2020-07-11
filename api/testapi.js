module.exports = (req, res) => {
  const { name = "test" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};

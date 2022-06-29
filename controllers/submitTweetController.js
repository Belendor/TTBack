exports.submitTweet = async (req, res) => {
  console.log(req.body);
  console.log("got");

  return res.send({
    status: "ok"
  });
};

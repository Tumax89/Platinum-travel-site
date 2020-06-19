exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Хэрэглэгчидийн хуудсанд тавтай морилно уу",
  });
};

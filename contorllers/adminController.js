const Content = require('../models/content');

exports.admin = (req, res, next) => {
  res.render('admin');
};

exports.postContent = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const now = new Date();

  const content = new Content({
    title: title,
    imageUrl: imageUrl,
    description: description
  });

  content
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });

  console.log(title);
  console.log(imageUrl);
};

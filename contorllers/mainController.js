const Content = require('../models/content');

exports.main = (req, res, next) => {
  Content.find()
    .then(content => {
      // 시간 계산 예쁘게 꾸미기~~~
      const nowTime = new Date().getTime();

      for (i = 0; i < content.length; i++) {
        let time = Math.floor(
          (nowTime - content[i].time.getTime()) / 1000 / 60
        );
        content[i].time1 = time;
      }

      res.render('main', {
        content: content
      });
    })
    .catch(err => {
      console.log(err);
    });
};

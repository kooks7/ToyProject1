const Content = require('../models/content');

exports.main = (req, res, next) => {
  Content.find()
    .then(content => {
      // 시간 계산 예쁘게 꾸미기~~~
      const nowTime = new Date().getTime();
      let time;
      let day;
      let hour;
      let min;
      for (i = 0; i < content.length; i++) {
        time = Math.floor((nowTime - content[i].time.getTime()) / 1000 / 60);

        if (time > 24 * 60) {
          day = Math.floor(time / 24 / 60);
          content[i].time1 = `${day}일`;
        } else {
          if (time > 60) {
            hour = Math.floor(time / 60);
            content[i].time1 = `${hour}시간`;
          } else {
            content[i].time1 = `${time}분`;
          }
        }
      }
      res.render('main', {
        content: content
      });
    })
    .catch(err => {
      console.log(err);
    });
};

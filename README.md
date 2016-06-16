# wx-qrcode
微信二维码生成，包括临时二维码和永久二维码 支持express koa

###1、使用规则
      var Qrcode = require('wx-qrcode');
      var opts = {
        access_token: "access_token"
      };
      
      var qrcode = new Qrcode(opts);
      //临时二维码
      var limit_args = {"expire_seconds": 604800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}};
      qrcode.createLimitQrcode(limit_args).then(function(body){
          console.log(body);
          //返回格式          
          //{"ticket":"gQH47joAAAAAAAAAASxodHRwOi8vd2VpeGluLnFxLmNvbS9xL2taZ2Z3TVRtNzJXV1Brb3ZhYmJJAAIEZ23sUwMEmm
          3sUw==","expire_seconds":60,"url":"http:\/\/weixin.qq.com\/q\/kZgfwMTm72WWPkovabbI"}
      });
      
      //永久二维码
      var args = {"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}};
      //或者为
      var args = {"action_name": "QR_LIMIT_STR_SCENE", "action_info": {"scene": {"scene_str": "123"}}};
      
      qrcode.createQrcode(limit_args).then(function(body){
          console.log(body);
          //返回格式          
          //{"ticket":"gQH47joAAAAAAAAAASxodHRwOi8vd2VpeGluLnFxLmNvbS9xL2taZ2Z3TVRtNzJXV1Brb3ZhYmJJAAIEZ23sUwMEmm
          3sUw==","expire_seconds":60,"url":"http:\/\/weixin.qq.com\/q\/kZgfwMTm72WWPkovabbI"}
      });

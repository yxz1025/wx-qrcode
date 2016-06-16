var Q = require("q");
var request = require("request");

//二维码生成
function Qrcode(opts) {
    this.opts = opts || {};
};

//永久二维码
/*
*
*{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}}
或者也可以使用以下POST数据创建字符串形式的二维码参数：
{"action_name": "QR_LIMIT_STR_SCENE", "action_info": {"scene": {"scene_str": "123"}}}
*/
Qrcode.prototype.createQrcode = function(args) {
    var deferred = Q.defer();
    var options = {
        url: "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=" + this.opts.access_token,
        form: JSON.stringify(args)
    };
    request.post(options, function(err, response, data) {
        if (err) {
            deferred.reject(err);
        } else {
            data = JSON.parse(data);
            deferred.resolve(data);
        }
    });
    return deferred.promise;
};

//临时二维码
/**
 *{"expire_seconds": 604800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}}
 *
 *
 *
 */
Qrcode.prototype.createLimitQrcode = function(args) {
    var deferred = Q.defer();
    var options = {
        url: "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=" + this.opts.access_token,
        form: JSON.stringify(args)
    };
    request.post(options, function(err, response, data) {
        if (err) {
            deferred.reject(err);
        } else {
            data = JSON.parse(data);
            deferred.resolve(data);
        }
    });
    return deferred.promise;
};

module.exports = Qrcode;

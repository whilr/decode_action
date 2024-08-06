//Tue Aug 06 2024 13:29:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "泰康在线";
VALY = ["tkzxck"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
class Bar {
  constructor(_0x3a5bdd) {
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.memberid = atob(_0x3a5bdd.split("#")[0]);
    this.token = _0x3a5bdd.split("#")[1];
    this.fromid = _0x3a5bdd.split("#")[2];
    this.did = $.SJS(59, 1);
    this.message = "";
    this.logs = true;
  }
  async ["sign"](_0x434ff7) {
    let _0x1cb836 = $.DecryptCrypto("0", "AES", "ECB", "Pkcs7", _0x434ff7, "EEue2kxI0oh2GBJh");
    return _0x1cb836;
  }
  async ["sign2"](_0x574330) {
    let _0x41e9c3 = $.DecryptCrypto2("0", "AES", "ECB", "Pkcs7", _0x574330, "xdh3OmA5gEMMy0Mz");
    return _0x41e9c3;
  }
  async ["getcoordinate"]() {
    let _0xe0f106 = {
        "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)"
      },
      _0x47b020 = await $.task("get", "https://ipapi.co/json", _0xe0f106),
      _0x5398c9 = _0x47b020.longitude + "13" + "," + _0x47b020.latitude + "34";
    return _0x5398c9;
  }
  async ["signin"]() {
    let _0x5ca29 = await this.getcoordinate(),
      _0x49905a = _0x5ca29.split(",")[0],
      _0x26c614 = _0x5ca29.split(",")[1],
      _0xcfc3ad = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionid\":\"\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"71673\",\"platform\":\"APP\",\"coordinate\":\"" + _0x5ca29 + "\",\"gpsLongitude\":\"" + _0x49905a + "\",\"gpsLatitude\":\"" + _0x26c614 + "\",\"os\":\"android\"}",
      _0x50af0f = await this.sign(_0xcfc3ad),
      _0x17e273 = "{\"enc\":true,\"encData\":\"" + _0x50af0f + "\"}",
      _0x3a00d7 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/sign", {}, _0x17e273);
    _0x3a00d7.error_code == 0 && console.log(this.f + " 签到成功");
  }
  async ["tasklist"]() {
    let _0x4096b0 = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\"}",
      _0xeffb7e = await this.sign(_0x4096b0),
      _0x44df8c = "{\"enc\":true,\"encData\":\"" + _0xeffb7e + "\"}",
      _0x57c6a9 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/queryTask", {}, _0x44df8c);
    if (_0x57c6a9.error_code == 0) for (let _0x4ffe33 of _0x57c6a9.data) {
      if (_0x4ffe33.taskCode == "browse" && _0x4ffe33.statusDesc == "未完成") {
        let _0x147b2c = _0x4ffe33.viewToken,
          _0x15d94d = _0x4ffe33.taskName,
          _0x1047ba = _0x4ffe33.activityId,
          _0x1dbedf = _0x4ffe33.assignmentId,
          _0x331ffa = _0x4ffe33.assignmentType,
          _0x211e29 = _0x4ffe33.taskCode;
        await this.view(_0x147b2c, _0x15d94d, _0x1047ba, _0x1dbedf, _0x331ffa, _0x211e29);
      }
      if (_0x4ffe33.taskCode == "VIEW_MEMBER" && _0x4ffe33.statusDesc == "未完成") {
        let _0x48bc97 = _0x4ffe33.viewToken;
        await this.viewvip(_0x48bc97);
      }
      _0x4ffe33.taskCode == "ANSWER" && _0x4ffe33.statusDesc == "去完成" && (await this.answer2());
      if (_0x4ffe33.statusDesc == "去完成") {
        let _0x5afc91 = _0x4ffe33.taskToken,
          _0x28b8e0 = _0x4ffe33.taskName,
          _0x43370a = _0x4ffe33.activityId,
          _0x37a191 = _0x4ffe33.assignmentId,
          _0x3e43b2 = _0x4ffe33.assignmentType,
          _0x4d6992 = _0x4ffe33.taskCode;
        switch (_0x4d6992) {
          case "CUSTOM_MADE":
          case "BROWSE_ARTICLES":
          case "SHARE_PRODUCT":
            await this.dotask(_0x5afc91, _0x28b8e0, _0x43370a, _0x37a191, _0x3e43b2, _0x4d6992);
            break;
          default:
            break;
        }
      }
    }
  }
  async ["view"](_0x350329, _0x46182b, _0xef4913, _0x797c4b, _0x55b373, _0x29f0ed) {
    await this.startview(_0xef4913, _0x797c4b, _0x55b373, _0x29f0ed);
    await this.startview2(_0x350329);
    let _0x3650cd = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"WAP\",\"fromId\":\"71673\"}",
      _0x30bcfc = await this.sign2(_0x3650cd),
      _0x5c4764 = $.time(13),
      _0x3680af = 60000 * Math.floor(_0x5c4764 / 60000),
      _0x38c092 = _0x5c4764 + Math.random().toString(36).substr(-8),
      _0x2733d5 = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x38c092 + _0x3680af + "d0ZGEyNGM4MmI3ODZOVE")),
      _0x5b33e5 = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x38c092 + "\",\"timestamp\":\"" + _0x5c4764 + "\",\"sign\":\"" + _0x2733d5 + "\"}",
      _0x5d5b20 = await this.sign2(_0x5b33e5),
      _0x2f6de0 = {
        "signature": _0x5d5b20,
        "authorization": _0x30bcfc
      },
      _0x4535a8 = "{\"viewToken\":\"" + _0x350329 + "\"}",
      _0x48117d = await $.task("post", "https://f.tk.cn/promotion/net-camp-api/api/callback/browse", _0x2f6de0, _0x4535a8);
    _0x48117d.error_code == 0 && console.log(this.f + " " + _0x46182b + _0x48117d.data.msg);
  }
  async ["startview2"](_0x539a3c) {
    await $.wait(15000, 20000);
  }
  async ["startview"](_0x58e772, _0x2b32ef, _0x9d435f, _0x259649) {
    let _0xfbb32d = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"eventType\":\"" + _0x259649 + "\",\"activityCode\":\"membergoldbean\",\"activityId\":\"" + _0x58e772 + "\",\"assignmentId\":\"" + _0x2b32ef + "\",\"assignmentType\":\"" + _0x9d435f + "\"}",
      _0x473af7 = await this.sign(_0xfbb32d),
      _0x28d921 = "{\"enc\":true,\"encData\":\"" + _0x473af7 + "\"}";
  }
  async ["viewvip"](_0x3c907e) {
    await this.startviewvip();
    let _0x1040c8 = "{\"viewToken\":\"" + _0x3c907e + "\",\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\",\"deviceId\":\"" + this.did + "\"}",
      _0x4e4780 = await this.sign(_0x1040c8),
      _0x4ccf28 = "{\"enc\":true,\"encData\":\"" + _0x4e4780 + "\"}",
      _0x1ace84 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/viewProductCallback", {}, _0x4ccf28);
    if (_0x1ace84.error_code == 0) {
      console.log(this.f + " " + _0x1ace84.data.msg);
    }
  }
  async ["startviewvip"]() {
    let _0x3a0fc9 = encodeURIComponent("params={\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\",\"fromid\":\"71673\"}"),
      _0x30292a = "api_s=member.core&api_m=rightsinform&" + _0x3a0fc9;
    await $.wait(15000, 20000);
  }
  async ["dotask"](_0x1a1866, _0x20bfe1, _0x9a61b0, _0x453d6e, _0x4f43b5, _0x1fc27f) {
    await this.startview(_0x9a61b0, _0x453d6e, _0x4f43b5, _0x1fc27f);
    let _0x4f1e84 = "{\"memberId\":\"" + this.memberid + "\",\"taskToken\":\"" + _0x1a1866 + "\"}",
      _0x11a8a8 = await this.sign(_0x4f1e84),
      _0x590f14 = "{\"enc\":true,\"encData\":\"" + _0x11a8a8 + "\"}",
      _0x29acd0 = await $.task("post", "https://m.tk.cn/activity_execute/rest/callback/taskCallBack", {}, _0x590f14);
    _0x29acd0.error_code == 0 && console.log(this.f + " " + _0x20bfe1 + _0x29acd0.data);
  }
  async ["answer"](_0xa8b0c1) {
    let _0x542dfb = $.time(13),
      _0x15ad58 = 60000 * Math.floor(_0x542dfb / 60000),
      _0x2ecf1f = _0x542dfb + Math.random().toString(36).substr(-8),
      _0x512752 = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x2ecf1f + _0x15ad58 + "d0ZGEyNGM4MmI3ODZOVE")),
      _0x4ec16a = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x2ecf1f + "\",\"timestamp\":\"" + _0x542dfb + "\",\"sign\":\"" + _0x512752 + "\"}",
      _0x181de6 = await this.sign2(_0x4ec16a),
      _0x4ea3ea = {
        "signature": _0x181de6
      },
      _0x144252 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionId\":\"" + _0xa8b0c1 + "\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\",\"nickName\":\"\",\"headUrl\":\"\",\"xcxOpenId\":\"\",\"gzhOpenId\":\"\"}",
      _0x4ff39c = await this.sign(_0x144252),
      _0x1ce7c1 = "{\"enc\":true,\"encData\":\"" + _0x4ff39c + "\"}",
      _0x8d9aab = await $.task("post", "https://m.tk.cn/promotion/activity_execute/rest/tk/answer/mainPage", _0x4ea3ea, _0x1ce7c1);
    if (_0x8d9aab.error_code == 0) {
      let _0x266494 = _0x8d9aab.data.questionDetail.answer;
      return _0x266494;
    }
  }
  async ["getunionid"]() {
    let _0x55c090 = "api_s=member.userbind&api_m=selectwxbindbymemberid&params=%7B%22platform%22%3A%22APP%22%2C%22memberid%22%3A%22" + this.memberid + "%22%2C%22token%22%3A%22" + this.token + "%22%2C%22fromid%22%3A%22" + this.fromid + "%22%7D",
      _0x1e5299 = await $.task("post", "https://m.tk.cn/member_api/", {}, _0x55c090);
    if (_0x1e5299.code == "sys_success") {
      let _0x2f1003 = _0x1e5299.data.bindid;
      return _0x2f1003;
    }
  }
  async ["answer2"]() {
    let _0x10e637 = await this.getunionid(),
      _0xd40016 = await this.answer(_0x10e637),
      _0x517559 = $.time(13),
      _0x34b2a0 = 60000 * Math.floor(_0x517559 / 60000),
      _0x174f08 = _0x517559 + Math.random().toString(36).substr(-8),
      _0x7a549c = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x174f08 + _0x34b2a0 + "d0ZGEyNGM4MmI3ODZOVE")),
      _0x300aef = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x174f08 + "\",\"timestamp\":\"" + _0x517559 + "\",\"sign\":\"" + _0x7a549c + "\"}",
      _0x34b96a = await this.sign2(_0x300aef),
      _0x12708a = {
        "signature": _0x34b96a
      },
      _0x26b2c7 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"result\":\"" + _0xd40016 + "\",\"deviceId\":\"" + this.did + "\",\"os\":\"android\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\"}",
      _0x37cce5 = await this.sign(_0x26b2c7),
      _0xbf35dc = "{\"enc\":true,\"encData\":\"" + _0x37cce5 + "\"}";
    await this.staranswer();
    await this.dotask2(_0x10e637);
    await this.dotask3(_0x10e637);
  }
  async ["staranswer"]() {
    let _0x1afc97 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"eventType\":\"ANSWER\",\"activityCode\":\"membergoldbean\"}",
      _0xff20fc = await this.sign(_0x1afc97),
      _0x47b00c = "{\"enc\":true,\"encData\":\"" + _0xff20fc + "\"}";
  }
  async ["dotask2"](_0x21ddca) {
    let _0x13ac9e = $.time(13),
      _0x5e0d29 = 60000 * Math.floor(_0x13ac9e / 60000),
      _0x25c50f = _0x13ac9e + Math.random().toString(36).substr(-8),
      _0xb5edb5 = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x25c50f + _0x5e0d29 + "d0ZGEyNGM4MmI3ODZOVE")),
      _0x3ef364 = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x25c50f + "\",\"timestamp\":\"" + _0x13ac9e + "\",\"sign\":\"" + _0xb5edb5 + "\"}",
      _0x6c7b30 = await this.sign2(_0x3ef364),
      _0x5a69c7 = {
        "signature": _0x6c7b30
      },
      _0x3413c5 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionId\":\"" + _0x21ddca + "\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\",\"nickName\":\"\",\"headUrl\":\"\",\"xcxOpenId\":\"\",\"gzhOpenId\":\"\"}",
      _0x5f2670 = await this.sign(_0x3413c5),
      _0x30f8b = "{\"enc\":true,\"encData\":\"" + _0x5f2670 + "\"}";
  }
  async ["dotask3"](_0x4c60f9) {
    let _0x544607 = await this.getcoordinate(),
      _0x365118 = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"" + this.fromid + "\",\"platform\":\"APP\",\"coordinate\":\"" + _0x544607 + "\",\"unionid\":\"" + _0x4c60f9 + "\"}",
      _0x558fd4 = await this.sign(_0x365118),
      _0x7e1ef = "{\"enc\":true,\"encData\":\"" + _0x558fd4 + "\"}",
      _0x55c079 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/mainPage", {}, _0x7e1ef);
    _0x55c079.error_code == 0 && console.log(this.f + " " + _0x55c079.data.memberGoldbeanTaskToastVos[0].toastMessage);
    console.log(this.f + " 目前金币" + _0x55c079.data.allbeans);
  }
  async ["userinfo"]() {
    let _0x3b376f = await this.getunionid(),
      _0x556684 = await this.getcoordinate(),
      _0x357f07 = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"" + this.fromid + "\",\"platform\":\"APP\",\"coordinate\":\"" + _0x556684 + "\",\"unionid\":\"" + _0x3b376f + "\"}",
      _0x5431b9 = await this.sign(_0x357f07),
      _0x3f3f62 = "{\"enc\":true,\"encData\":\"" + _0x5431b9 + "\"}",
      _0x452d91 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/mainPage", {}, _0x3f3f62);
    if (_0x452d91.error_code == 0) {
      console.log(this.f + " 目前金币" + _0x452d91.data.allbeans);
      this.message += this.f + " 目前金币" + _0x452d91.data.allbeans;
    }
  }
}
$ = DD();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  await $.Multithreading("signin");
  await $.Multithreading("tasklist");
  await $.Multithreading("userinfo");
  let _0x156f4e = [];
  for (let _0x309c44 of $.cookie_list) {
    if (_0x309c44.message) _0x156f4e.push(_0x309c44.message);
  }
  if (_0x156f4e.length > 0) await $.SendMsg(_0x156f4e.join("\n"));
})().catch(_0x3ecca3 => {
  console.log(_0x3ecca3);
}).finally(() => {});
function DD() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x46e56f, _0x2af5e0, _0x13ecd9) {
      let _0x87f646 = [];
      if (!_0x13ecd9) {
        _0x13ecd9 = 1;
      }
      while (_0x13ecd9--) {
        for (let _0x39f173 of $.cookie_list) {
          _0x87f646.push(_0x39f173[_0x46e56f](_0x2af5e0));
        }
      }
      await Promise.allSettled(_0x87f646);
    }
    ["ExamineCookie"]() {
      let _0x388571 = process.env[VALY] || CK,
        _0x3bcbd7 = 0;
      if (_0x388571) {
        for (let _0x4dbe08 of _0x388571.split("\n").filter(_0x25eb95 => !!_0x25eb95)) {
          $.cookie_list.push(new Bar(_0x4dbe08));
        }
        _0x3bcbd7 = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x3bcbd7 + "个账号"), $.cookie_list;
    }
    ["task"](_0x4c1627, _0x59cdfc, _0x4c7b11, _0x50f2aa, _0x361013) {
      _0x4c1627 == "delete" ? _0x4c1627 = _0x4c1627.toUpperCase() : _0x4c1627 = _0x4c1627;
      if (_0x4c1627 == "post") {
        delete _0x4c7b11["content-type"];
        delete _0x4c7b11["Content-type"];
        delete _0x4c7b11["content-Type"];
        $.safeGet(_0x50f2aa) ? _0x4c7b11["Content-Type"] = "application/json;charset=UTF-8" : _0x4c7b11["Content-Type"] = "application/x-www-form-urlencoded";
        if (_0x50f2aa) {
          _0x4c7b11["Content-Length"] = $.lengthInUtf8Bytes(_0x50f2aa);
        }
      }
      return _0x4c1627 == "get" && (delete _0x4c7b11["content-type"], delete _0x4c7b11["Content-type"], delete _0x4c7b11["content-Type"], delete _0x4c7b11["Content-Length"]), _0x4c7b11.Host = _0x59cdfc.replace("//", "/").split("/")[1], new Promise(async _0x47484c => {
        if (_0x4c1627.indexOf("T") < 0) var _0x29178d = {
          "url": _0x59cdfc,
          "headers": _0x4c7b11,
          "body": _0x50f2aa,
          "proxy": "http://" + _0x361013
        };else {
          var _0x29178d = {
            "url": _0x59cdfc,
            "headers": _0x4c7b11,
            "form": JSON.parse(_0x50f2aa),
            "proxy": "http://" + _0x361013
          };
        }
        !_0x361013 && delete _0x29178d.proxy;
        this.request[_0x4c1627.toLowerCase()](_0x29178d, (_0x1b26e3, _0x55865d, _0xdf104a) => {
          try {
            _0xdf104a && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x29178d), console.log("================ 返回 ================"), $.safeGet(_0xdf104a) ? console.log(JSON.parse(_0xdf104a)) : console.log(_0xdf104a));
          } catch (_0x2e77ec) {
            console.log(_0x2e77ec, _0x59cdfc + "\n" + _0x4c7b11);
          } finally {
            let _0x2a6126 = "";
            if (!_0x1b26e3) {
              if ($.safeGet(_0xdf104a)) _0x2a6126 = JSON.parse(_0xdf104a);else _0xdf104a.indexOf("/") != -1 && _0xdf104a.indexOf("+") != -1 ? _0x2a6126 = _0xdf104a : _0x2a6126 = _0xdf104a;
            } else _0x2a6126 = _0x59cdfc + "   API请求失败，请检查网络重试\n" + _0x1b26e3;
            return _0x47484c(_0x2a6126);
          }
        });
      });
    }
    async ["SendMsg"](_0x202bf9) {
      if (!_0x202bf9) return;
      if (Notify == 1) {
        var _0x18f4e4 = require("./sendNotify");
        await _0x18f4e4.sendNotify(NAME, _0x202bf9);
      } else {}
    }
    ["lengthInUtf8Bytes"](_0x23fed6) {
      let _0x4fc2d8 = encodeURIComponent(_0x23fed6).match(/%[89ABab]/g);
      return _0x23fed6.length + (_0x4fc2d8 ? _0x4fc2d8.length : 0);
    }
    ["randomArr"](_0x55f490) {
      return _0x55f490[parseInt(Math.random() * _0x55f490.length, 10)];
    }
    ["wait"](_0x1f6245) {
      return new Promise(_0x5413d0 => setTimeout(_0x5413d0, _0x1f6245));
    }
    ["time"](_0xd4cdfb) {
      return _0xd4cdfb == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x3e7d5a) {
      let _0x44cbce = new Date();
      if (_0x3e7d5a == undefined) {
        let _0x273151 = new Date(),
          _0x507559 = _0x273151.getFullYear() + "-",
          _0x59e3a1 = (_0x273151.getMonth() + 1 < 10 ? "0" + (_0x273151.getMonth() + 1) : _0x273151.getMonth() + 1) + "-",
          _0x58ccce = _0x273151.getDate() + " ",
          _0x14435c = _0x273151.getHours() + ":",
          _0x39da58 = _0x273151.getMinutes() + ":",
          _0x3cbbdb = _0x273151.getSeconds() + 1 < 10 ? "0" + _0x273151.getSeconds() : _0x273151.getSeconds();
        return _0x507559 + _0x59e3a1 + _0x58ccce + _0x14435c + _0x39da58 + _0x3cbbdb;
      } else {
        if (_0x3e7d5a == 0) return _0x44cbce.getFullYear();else {
          if (_0x3e7d5a == 1) return _0x44cbce.getMonth() + 1 < 10 ? "0" + (_0x44cbce.getMonth() + 1) : _0x44cbce.getMonth() + 1;else {
            if (_0x3e7d5a == 2) return _0x44cbce.getDate();else {
              if (_0x3e7d5a == 3) return _0x44cbce.getHours();else {
                if (_0x3e7d5a == 4) return _0x44cbce.getMinutes();else {
                  if (_0x3e7d5a == 5) return _0x44cbce.getSeconds() + 1 < 10 ? "0" + _0x44cbce.getSeconds() : _0x44cbce.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0xf88d8f) {
      try {
        if (typeof JSON.parse(_0xf88d8f) == "object") return true;
      } catch (_0x3828cc) {
        return false;
      }
    }
    ["SJS"](_0x531270, _0x2867ec) {
      if (_0x2867ec == 0) {
        let _0x4e1340 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x28e978 = _0x4e1340.length,
          _0x14577b = "";
        for (let _0x15cbca = 0; _0x15cbca < _0x531270; _0x15cbca++) {
          _0x14577b += _0x4e1340.charAt(Math.floor(Math.random() * _0x28e978));
        }
        return _0x14577b;
      } else {
        if (_0x2867ec == 1) {
          let _0x2adf07 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x1918cf = _0x2adf07.length,
            _0xc725b8 = "";
          for (let _0x4cf24a = 0; _0x4cf24a < _0x531270; _0x4cf24a++) {
            _0xc725b8 += _0x2adf07.charAt(Math.floor(Math.random() * _0x1918cf));
          }
          return _0xc725b8;
        } else {
          let _0x7e099e = "0123456789",
            _0x1c9165 = _0x7e099e.length,
            _0x3a558a = "";
          for (let _0x594317 = 0; _0x594317 < _0x531270; _0x594317++) {
            _0x3a558a += _0x7e099e.charAt(Math.floor(Math.random() * _0x1c9165));
          }
          return _0x3a558a;
        }
      }
    }
    ["udid"](_0x351602) {
      function _0x2deef7() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x2c7311 = _0x2deef7() + _0x2deef7() + "-" + _0x2deef7() + "-" + _0x2deef7() + "-" + _0x2deef7() + "-" + _0x2deef7() + _0x2deef7() + _0x2deef7();
      if (_0x351602 == 0) {
        return _0x2c7311.toUpperCase();
      } else return _0x2c7311.toLowerCase();
    }
    ["encodeUnicode"](_0x3035c3) {
      var _0x4f3238 = [];
      for (var _0x5b3b08 = 0; _0x5b3b08 < _0x3035c3.length; _0x5b3b08++) {
        _0x4f3238[_0x5b3b08] = ("00" + _0x3035c3.charCodeAt(_0x5b3b08).toString(16)).slice(-4);
      }
      return "\\u" + _0x4f3238.join("\\u");
    }
    ["decodeUnicode"](_0xe7411e) {
      return _0xe7411e = _0xe7411e.replace(/\u/g, "%u"), unescape(unescape(_0xe7411e));
    }
    ["RT"](_0x9566c9, _0x48f21a) {
      return Math.round(Math.random() * (_0x48f21a - _0x9566c9) + _0x9566c9);
    }
    ["arrNull"](_0x44650c) {
      var _0x24cd9c = _0x44650c.filter(_0x2a5378 => {
        return _0x2a5378 && _0x2a5378.trim();
      });
      return _0x24cd9c;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x805348 = $.nowtime();
      return JSON.stringify(_0x805348).indexOf(" ") >= 0 && (_0x805348 = _0x805348.replace(" ", "T")), new Date(_0x805348).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x49fd3c, _0x55506b, _0x4d22a5, _0x2feabe) {
      return _0x2feabe == 0 ? JSON.stringify(_0x49fd3c.split(_0x55506b).reduce((_0x3cbf39, _0x478bc1) => {
        let _0x5268d8 = _0x478bc1.split(_0x4d22a5);
        return _0x3cbf39[_0x5268d8[0].trim()] = _0x5268d8[1].trim(), _0x3cbf39;
      }, {})) : _0x49fd3c.split(_0x55506b).reduce((_0x57f443, _0x52c0af) => {
        let _0x4b182c = _0x52c0af.split(_0x4d22a5);
        return _0x57f443[_0x4b182c[0].trim()] = _0x4b182c[1].trim(), _0x57f443;
      }, {});
    }
    ["MD5Encrypt"](_0x2d7759, _0x23f382) {
      if (_0x2d7759 == 0) return this.CryptoJS.MD5(_0x23f382).toString().toLowerCase();else {
        if (_0x2d7759 == 1) return this.CryptoJS.MD5(_0x23f382).toString().toUpperCase();else {
          if (_0x2d7759 == 2) return this.CryptoJS.MD5(_0x23f382).toString().substring(8, 24).toLowerCase();else {
            if (_0x2d7759 == 3) return this.CryptoJS.MD5(_0x23f382).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x22454b, _0x572e80, _0x4a6842) {
      if (_0x22454b == 0) {
        return this.CryptoJS[_0x572e80](_0x4a6842).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x572e80](_0x4a6842).toString();
    }
    ["HmacSHA_Encrypt"](_0x234601, _0x208ada, _0x1ac6aa, _0x10f4d1) {
      if (_0x234601 == 0) {
        return this.CryptoJS[_0x208ada](_0x1ac6aa, _0x10f4d1).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x208ada](_0x1ac6aa, _0x10f4d1).toString();
    }
    ["Base64"](_0x4d4d09, _0x4cfa54) {
      return _0x4d4d09 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4cfa54)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4cfa54));
    }
    ["DecryptCrypto"](_0x244788, _0x5656e4, _0x5d482b, _0x5f0332, _0x142020, _0xae135b, _0x317987) {
      if (_0x244788 == 0) {
        const _0x2a040a = this.CryptoJS[_0x5656e4].encrypt(this.CryptoJS.enc.Utf8.parse(_0x142020), this.CryptoJS.enc.Utf8.parse(_0xae135b), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x317987),
          "mode": this.CryptoJS.mode[_0x5d482b],
          "padding": this.CryptoJS.pad[_0x5f0332]
        });
        return _0x2a040a.ciphertext.toString().toUpperCase();
      } else {
        const _0x3ecbef = this.CryptoJS[_0x5656e4].decrypt(_0x142020, this.CryptoJS.enc.Utf8.parse(_0xae135b), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x317987),
          "mode": this.CryptoJS.mode[_0x5d482b],
          "padding": this.CryptoJS.pad[_0x5f0332]
        });
        return _0x3ecbef.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["DecryptCrypto2"](_0x5e81ce, _0x5ae35d, _0x24f342, _0x3ead3f, _0x1049f9, _0x3cc4b9, _0x112e0d) {
      const _0x44d837 = this.CryptoJS[_0x5ae35d].encrypt(this.CryptoJS.enc.Utf8.parse(_0x1049f9), this.CryptoJS.enc.Utf8.parse(_0x3cc4b9), {
        "iv": this.CryptoJS.enc.Utf8.parse(_0x112e0d),
        "mode": this.CryptoJS.mode[_0x24f342],
        "padding": this.CryptoJS.pad[_0x3ead3f]
      });
      return _0x44d837.ciphertext.toString();
    }
    ["RSA"](_0x23666b, _0x4551ec) {
      const _0x3aac9d = require("node-rsa");
      let _0x5b41b6 = new _0x3aac9d("-----BEGIN PUBLIC KEY-----\n" + _0x4551ec + "\n-----END PUBLIC KEY-----");
      return _0x5b41b6.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x5b41b6.encrypt(_0x23666b, "base64", "utf8");
    }
    ["SHA_RSA"](_0x3fb32b, _0x1cf270) {
      let _0x27afd2 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x1cf270, 76) + "\n-----END PRIVATE KEY-----"),
        _0x336566 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x336566.init(_0x27afd2);
      _0x336566.updateString(_0x3fb32b);
      let _0x39ba99 = _0x336566.sign(),
        _0x458c4c = this.Sha_Rsa.hextob64u(_0x39ba99);
      return _0x458c4c;
    }
  }();
}
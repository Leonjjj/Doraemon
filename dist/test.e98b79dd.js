// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  .outside {\n    color: white;\n    min-height: 50vh;\n  }\n  .tou {\n    border: 3px solid black;\n    height: 600px;\n    width: 600px;\n    left: 50%;\n    margin-left: -300px;\n    position: relative;\n    border-radius: 50%;\n    background-color: RGB(60, 157, 202);\n  }\n  \n  .face {\n    border: 1px solid black;\n    height: 462px;\n    width: 524px;\n    position: absolute;\n    left: 50%;\n    margin-left: -262px;\n    top: 132px;\n    border-radius: 100%;\n    background: white;\n  }\n  \n  .eyeLeft {\n    border: 1px solid red;\n    position: absolute;\n    left: 50%;\n    width: 125px;\n    height: 152px;\n    margin-left: -125px;\n    border-radius: 100%;\n    top: 80px;\n    border: 1px solid black;\n    background: white;\n    z-index: 10;\n  }\n  .eyeRight {\n    background: white;\n    border: 1px solid black;\n    position: absolute;\n    left: 50%;\n    width: 125px;\n    height: 152px;\n    border-radius: 100%;\n    top: 80px;\n    z-index: 10;\n  }\n  \n  \n  .eyeRight::before {\n    content: \"\";\n    width: 25px;\n    height: 45px;\n    border-radius: 100%;\n    position: relative;\n    background: black;\n    display: block;\n    top: 90px;\n    left: 20px;\n    animation: move 4s ease infinite;\n  }\n  .eyeRight::after {\n    content: \"\";\n    width: 10px;\n    height: 15px;\n    border-radius: 100%;\n    position: relative;\n    background: white;\n    display: block;\n    top: 70px;\n    left: 25px;\n    animation: move 4s ease infinite;\n  }\n  .eyeLeft::before {\n    content: \"\";\n    width: 25px;\n    height: 45px;\n    border-radius: 100%;\n    position: relative;\n    background: black;\n    display: block;\n    top: 90px;\n    left: 20px;\n    animation: move 4s ease infinite;\n  }\n  .eyeLeft::after {\n    content: \"\";\n    width: 10px;\n    height: 15px;\n    border-radius: 100%;\n    position: relative;\n    background: white;\n    display: block;\n    top: 70px;\n    left: 25px;\n    animation: move 4s ease infinite;\n  }\n  \n  .nose {\n    width: 45px;\n    height: 45px;\n    border-radius: 100%;\n    background: #b90319;\n    left: 50%;\n    position: absolute;\n    margin-left: -22.5px;\n    top: 205px;\n    z-index: 10;\n  }\n  .nose::before {\n    content: \"\";\n    display: block;\n    width: 15px;\n    height: 15px;\n    border-radius: 100%;\n    background: white;\n    top: 20px;\n    left: 10px;\n    position: relative;\n  }\n  \n  .mouse {\n    position: absolute;\n    border: 2px solid;\n    width: 400px;\n    height: 400px;\n    border-radius: 100%;\n    left: 50%;\n    margin-left: -200px;\n    top: 150px;\n    border-color: black;\n    z-index: 1;\n  }\n  .mouse::before {\n    content: \"\";\n    display: block;\n    width: 410px;\n    height: 402px;\n    margin-left: -5px;\n    position: absolute;\n    background: white;\n    border-radius: 100%;\n    top: -20px;\n    margin-left: -8px;\n  }\n  \n  .beardLeft1 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(120deg) translate(20px, -120px);\n  }\n  .beardLeft2 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(90deg);\n    top: 150px;\n    left: 80px;\n  }\n  \n  .beardLeft3 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(60deg);\n    top: 230px;\n    left: 80px;\n  }\n  .beardRight1 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(90deg);\n    right: 80px;\n    top: 150px;\n  }\n  .beardRight2 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(240deg);\n    right: 100px;\n    top: 80px;\n  }\n  \n  .beardRight3 {\n    z-index: 10;\n    position: absolute;\n    width: 2.5px;\n    height: 200px;\n    background: black;\n    transform: rotate(120deg);\n    right: 100px;\n    top: 230px;\n  }\n  \n  .shu {\n    position: absolute;\n    width: 1.5px;\n    height: 340px;\n    background: black;\n    left: 50%;\n    top: 210px;\n    z-index: 9;\n  }\n\n  @keyframes move {\n    25% {\n      transform: translate(20px, 0px);\n    }\n    50% {\n      transform: translate(40px, -20px);\n    }\n    75% {\n      transform: translate(20px, 0px);\n    }\n  }\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var time = 100;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var id = play();

btn_Play.onclick = function () {
  id = play();
};

btnTing.onclick = function () {
  window.clearInterval(id);
};

btnSlow.onclick = function () {
  window.clearInterval(id);
  time = 300;
  id = play();
};

btnNormal.onclick = function () {
  window.clearInterval(id);
  time = 100;
  id = play();
};

btnFast.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = play();
};
},{"./css.js":"css.js"}],"C:/Users/Leon/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58793" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Leon/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map
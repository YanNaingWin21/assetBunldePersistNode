window.__require=function e(r,t,o){function n(c,s){if(!t[c]){if(!r[c]){var u=c.split("/");if(u=u[u.length-1],!r[u]){var p="function"==typeof __require&&__require;if(!s&&p)return p(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var d=t[c]={exports:{}};r[c][0].call(d.exports,function(e){return n(r[c][1][e]||e)},d,d.exports,e,r,t,o)}return t[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)n(o[c]);return n}({persistNodeScript:[function(e,r,t){"use strict";cc._RF.push(r,"659d0QJaYBFxp3CU5ZObEur","persistNodeScript"),cc.Class({extends:cc.Component,properties:{persistNode:{default:null,type:cc.Node}},onLoad:function(){cc.game.addPersistRootNode(this.persistNode)},onClickBack:function(){cc.director.loadScene("assetBundle")},start:function(){}}),cc._RF.pop()},{}]},{},["persistNodeScript"]);
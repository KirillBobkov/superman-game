!function(t){function i(i){for(var n,r,a=i[0],h=i[1],p=i[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);for(c&&c(i);d.length;)d.shift()();return s.push.apply(s,p||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],n=!0,a=1;a<e.length;a++){var h=e[a];0!==o[h]&&(n=!1)}n&&(s.splice(i--,1),t=r(r.s=e[0]))}return t}var n={},o={0:0},s=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)r.d(e,n,function(i){return t[i]}.bind(null,n));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);a.push=i,a=a.slice();for(var p=0;p<a.length;p++)i(a[p]);var c=h;s.push([73,1]),e()}({49:function(t,i,e){},73:function(t,i,e){"use strict";e.r(i);e(49);function n(){this.canvas=null,this.ctx=null}n.prototype.create=function(t){this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d")};var o=new n;o.create("canvas");var s=function(t){var i=sessionStorage.getItem("bestScore");(i<t||null===i)&&sessionStorage.setItem("bestScore",t)},r=function(t){t.innerHTML=sessionStorage.getItem("bestScore")||0},a=function(t,i,e){i.innerHTML=t.unit.score,e.innerHTML=t.unit.health},h=window.document.getElementById("outputScore"),p=window.document.getElementById("outputHealth"),c=document.getElementById("welcomePage"),u=document.getElementById("gameOverPage"),d=document.getElementById("resetGame"),g=document.getElementById("restartGame"),l=document.getElementById("pauseGame"),m=document.getElementById("resumeGame"),y=document.getElementById("bestScore"),f=document.getElementById("startGame");function w(t){var i=t.image,e=t.positionX,n=t.positionY;this.image=i,this.positionX=e,this.positionY=n}function v(t){var i=t.image,e=t.positionX,n=t.positionY,o=t.width,s=t.height;w.call(this,{image:i,positionX:e,positionY:n}),this.width=o,this.height=s}function b(t){var i=t.image,e=t.positionX,n=t.positionY,o=t.width,s=t.height;w.call(this,{image:i,positionX:e,positionY:n}),this.width=o,this.height=s}function Y(t){var i=t.image,e=t.positionX,n=t.positionY,o=t.width,s=t.height,r=t.health;w.call(this,{image:i,positionX:e,positionY:n}),this.width=o,this.height=s,this.health=r,this.score=0,this.animationX=3,this.animationY=0}function X(t){var i=t.image,e=t.positionX,n=t.positionY,o=t.width,s=t.height;w.call(this,{image:i,positionX:e,positionY:n}),this.width=o,this.height=s}function O(t){var i=t.image,e=t.positionX,n=t.positionY,o=t.width,s=t.height,r=t.animationX,a=t.animationY;w.call(this,{image:i,positionX:e,positionY:n}),this.width=o,this.height=s,this.animationX=r,this.animationY=a}w.prototype.draw=function(){o.ctx.drawImage(this.image,this.positionX,this.positionY)},v.prototype=Object.create(w.prototype),v.prototype.constructor=v,b.prototype=Object.create(w.prototype),b.prototype.constructor=b,Y.prototype=Object.create(w.prototype),Y.prototype.constructor=Y,Y.prototype.moveRight=function(){this.positionX<o.canvas.width-this.width&&(this.positionX+=6)},Y.prototype.moveLeft=function(){this.positionX>0&&(this.positionX-=6)},X.prototype=Object.create(w.prototype),X.prototype.constructor=X,X.prototype.drawBack=function(){this.draw(),o.ctx.drawImage(this.image,this.positionX,this.positionY-o.canvas.height)},O.prototype=Object.create(w.prototype),O.prototype.constructor=O,O.prototype.drawExplosion=function(){o.ctx.drawImage(this.image,this.animationX,this.animationY,.8*this.width,.8*this.height,this.positionX-30,this.positionY-55,1.2*this.width,1.2*this.height),this.animationX+=80,this.animationX>640&&(this.animationY+=80,this.animationX=5)};e(50),e(64),e(65),e(67),e(68),e(69),e(70),e(71);var E=40,k=39,S=37,j=function(){return Math.floor(Math.random()*(o.canvas.width-50))};function A(t,i){return t.positionX+t.width-5>i.positionX&&t.positionX+5<i.positionX+i.width&&t.positionY+t.height-5>i.positionY&&t.positionY+5<i.positionY+i.height}function B(t){var i=new Image;return i.src=t,i}var x=function(t){t.style.display="none"},I=function(t){t.style.display="block"},P={image:B("public/superman.png"),width:25,height:78,health:100,score:0,animationX:3,animationY:0,positionX:170,positionY:400},M={image:B("public/back3.png"),positionX:0,positionY:0},L={positionY:-350,width:70,height:240},G={image:B("public/bonus.png"),positionY:-32,width:16,height:32,widthSpeedBonus:37,heightSpeedBonus:43},_={image:B("public/explosion.png"),width:100,height:100,animationX:5,animationY:0};function T(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?T(e,!0).forEach((function(i){H(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):T(e).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function H(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function C(){this.running=!0,this.speedY=8,this.timer=0,this.enemyArray=[],this.bonusArray=[],this.explosionArray=[],this.keyState=[],this.background=new X({image:M.image,positionX:M.positionX,positionY:M.positionY,width:o.canvas.width,height:o.canvas.height}),this.unit=new Y(D({},P))}C.prototype.generateEnemy=function(){if(this.timer+=1,this.timer%35==0){var t=new v(D({image:(i=new Image,e=Math.floor(1+7*Math.random()),i.src="public/barrier".concat(e,".png"),i),positionX:j()},L));this.enemyArray.push(t)}var i,e},C.prototype.generateBonus=function(){if(this.timer%10==0){var t=new b({image:G.image,positionX:j(),positionY:G.positionY,width:G.width,height:G.height});this.timer%100==0&&(t.image=B("public/bonusSpeed.png"),t.width=G.widthSpeedBonus,t.height=G.heightSpeedBonus,t.boost=!0),this.bonusArray.push(t)}},C.prototype.collisionOccursEnemy=function(){var t=this;this.enemyArray.forEach((function(i){if(A(i,t.unit)){t.unit.health-=1,0===t.unit.health&&(t.running=!1);var e=new O(D({positionX:i.positionX,positionY:i.positionY+i.height/2},_));t.explosionArray.push(e)}}))},C.prototype.collisionOccursBonus=function(){var t=this;this.bonusArray.forEach((function(i,e){A(i,t.unit)&&(t.unit.score+=1,"boost"in i&&(t.speedY=12),t.bonusArray.splice(e,1))}))},C.prototype.moveEntities=function(){var t=this;if(this.background.positionY>o.canvas.height){var i=this.background.positionY-o.canvas.height;this.background.positionY=i}this.background.positionY+=this.speedY,this.explosionArray.forEach((function(i,e){i.positionY+=t.speedY,i.positionY>2*o.canvas.height&&t.explosionArray.splice(e,1)})),this.bonusArray.forEach((function(i,e){i.positionY+=t.speedY,i.positionY>2*o.canvas.height&&t.bonusArray.splice(e,1)})),this.enemyArray.forEach((function(i,e){i.positionY+=t.speedY,i.positionY>2*o.canvas.height&&t.enemyArray.splice(e,1)}))},C.prototype.over=function(){return 0===this.unit.health},C.prototype.restart=function(){this.bonusArray=[],this.enemyArray=[],this.explosionArray=[],this.speedY=8,this.unit.score=P.score,this.unit.health=P.health,this.background.positionY=M.positionX,this.running=!0},C.prototype.unitMoving=function(){this.keyState[k]&&this.unit.moveRight(),this.keyState[S]&&this.unit.moveLeft(),this.keyState[E]&&(this.speedY-=.2,this.speedY<8&&(this.speedY=8))},C.prototype.changeUnit=function(){this.speedY>=12?this.unit.image=B("public/supermanBoost.png"):this.unit.image=P.image},C.prototype.update=function(){this.unitMoving(),this.changeUnit(),this.generateEnemy(),this.generateBonus(),this.collisionOccursEnemy(),this.collisionOccursBonus(),this.moveEntities()},C.prototype.render=function(){this.background.drawBack(),this.enemyArray.forEach((function(t){t.draw()})),this.bonusArray.forEach((function(t){t.draw()})),this.explosionArray.forEach((function(t){t.drawExplosion()})),this.unit.draw()};var J=new C;function R(){var t=this;this.pause=function(){J.running=!1},this.resume=function(){J.running=!0},this.restart=function(){x(u),J.restart()},this.checkGameOver=function(){J.over()&&(s(J.unit.score),I(u))},this.start=function(){x(c),r(y),a(J,h,p),J.running&&(J.update(),J.render()),t.checkGameOver(),requestAnimationFrame(t.start)}}window.document.addEventListener("keydown",(function(t){J.keyState[t.keyCode]=!0})),window.document.addEventListener("keyup",(function(t){J.keyState[t.keyCode]=!1})),window.onload=function(){var t=new R;l.addEventListener("click",t.pause),m.addEventListener("click",t.resume),d.addEventListener("click",t.restart),g.addEventListener("click",t.restart),f.addEventListener("click",t.start)}}});
//# sourceMappingURL=app.9e6e2611.js.map
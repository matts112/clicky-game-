(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Shinji",image:"https://i.kym-cdn.com/entries/icons/original/000/017/786/tumblr_mjkfjrIFyZ1s8r2c1o1_400.jpg",count:0},{id:2,name:"Asuka",image:"https://vignette4.wikia.nocookie.net/characterprofile/images/7/72/Asuka.png/revision/latest?cb=20160326113417",count:0},{id:3,name:"Rei",image:"https://i.pinimg.com/originals/24/9c/1f/249c1fd5de0a8f78afa7a85b918a80da.jpg",count:0},{id:4,name:"Misato",image:"https://i.pinimg.com/originals/ce/a1/05/cea105bafe7ae076bc226084da0bf3d2.png",count:0},{id:5,name:"Mari",image:"https://vignette.wikia.nocookie.net/evangelion/images/2/28/Mari_%28Plugsuit_08%29.png/revision/latest?cb=20130426094118",count:0},{id:6,name:"Kaworu",image:"https://i.pinimg.com/originals/b1/a5/76/b1a5765a65e4ab25bbfeb4a8df9c10a8.jpg",count:0},{id:7,name:"Ritsuko",image:"https://vignette.wikia.nocookie.net/evangelion/images/6/69/Ritsuko_Akagi_%28Lab_Coat%29.png/revision/latest?cb=20120305024739",count:0},{id:8,name:"Eva06",image:"https://vignette.wikia.nocookie.net/evangelion/images/4/43/Evangelion_Mark_06_Artwork.png/revision/latest?cb=20130316175955",count:0},{id:9,name:"Eva01",image:"https://vignette.wikia.nocookie.net/evangelion/images/7/77/Evangelion_Unit_01.png/revision/latest?cb=20120207020239",count:0},{id:10,name:"Eva02",image:"https://vignette.wikia.nocookie.net/evangelion/images/4/4c/Unit_02_equipped_with_cannons.png/revision/latest?cb=20130511174003",count:0},{id:11,name:"Eva03",image:"https://vignette.wikia.nocookie.net/evangelion/images/d/db/Evangelion_Unit-03.png/revision/latest?cb=20130618143044",count:0},{id:12,name:"Eva04",image:"https://vignette.wikia.nocookie.net/evangelion/images/2/28/Evangelion_Unit-04_Artwork_%28CR_NGE_-_Angels%27_Return%29.png/revision/latest?cb=20140409043907",count:0}]},,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(3),c=n.n(o),s=(n(15),n(4)),r=n(5),g=n(7),m=n(6),l=n(8),u=(n(17),function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),d=(n(19),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(21),function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},e.children),a.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),v=n(1),p=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={cards:v,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find(function(t,i){if(t.id===e){if(0===v[i].count)return v[i].count=v[i].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(d,null,a.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Evangelion Clicky Game"),this.state.cards.map(function(t){return a.a.createElement(u,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.42cd347b.chunk.js.map
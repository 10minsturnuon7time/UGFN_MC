(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(11),s=n(15),r=n(13),o=n(22),c=n(0),l=n.n(c),u=n(19),d=n.n(u),f=n(14),m=n(20),h=n(21),S=n(7),b=n(3),p=(n(29),n(30),n(12)),g=n.n(p),v=n(6);function w(e){return 0===e.display?l.a.createElement("div",{className:"mx-auto"},l.a.createElement("br",null),"Please read the following instructions carefully before you start:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null," Instruction"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S.a,null,l.a.createElement(S.a.Item,null,'Please do not click "go back" in your browser.'),l.a.createElement(S.a.Item,null,"Please do not close this page until you have completed the exercise."),l.a.createElement(S.a.Item,null,'You cannot modify your answer after clicking "submit" button.'),l.a.createElement(S.a.Item,null,"The author may have helpful comments for each question. Be sure to check for this feedback.")),l.a.createElement("br",null),l.a.createElement("br",null),"Good luck!",l.a.createElement("br",null),l.a.createElement("br",null),"Press Start button to start your quiz.",l.a.createElement("br",null),l.a.createElement("br",null)):""}function C(e){return e.questionnow>0&&e.questionnow<=b.length?l.a.createElement("div",null,b[e.questionnow-1].questiontext):""}function I(e){return l.a.createElement("div",null,l.a.createElement("img",{src:e.src,alt:b.questionnumber}))}function R(e){return l.a.createElement(f.a,{onClick:function(){return e.onClick()},variant:e.color,block:!0,disabled:e.disabled},b[e.questionnow-1].answer[e.i].ans)}function M(e){return l.a.createElement("div",null,b[e.questionnow-1].answer[e.history[e.questionnow-1]].feedback)}function O(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"Well Done, you have finished the quiz!")," ",l.a.createElement("br",null)," Go review the questions")}function E(e){return l.a.createElement(f.a,{className:"float-right",onClick:function(){return e.onClick()},disabled:e.disabled},e.value)}function A(e){var t,n,a=0,i=0,s=Object(o.a)(e.history);try{for(s.s();!(n=s.n()).done;)t=n.value,"1"===b[i].answer[t].fraction&&(a+=1/b.length),i++}catch(r){s.e(r)}finally{s.f()}return-1===e.score&&!1===e.scormupdated&&(e.setscore(100*a),e.setscormupdate()),l.a.createElement("div",null,l.a.createElement("br",null)," Your score is ",100*a)}var P=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).renderimg=function(){if(i.state.questionnow>0&&i.state.questionnow<=b.length&&""!==b[i.state.questionnow-1].image){var e=b[i.state.questionnow-1].image;return l.a.createElement(I,{questionnow:i.state.questionnow,src:e})}},i.renderans=function(e){var t="light";return i.state.questionnow>0&&i.state.questionnow<=b.length?("1"===b[i.state.questionnow-1].answer[e].fraction&&!0===i.state.answered&&(t="success"),i.state.history[i.state.questionnow-1]===e&&"0"===b[i.state.questionnow-1].answer[e].fraction&&!0===i.state.answered&&(t="danger"),l.a.createElement(R,{color:t,questionnow:i.state.questionnow,answered:i.state.answered,onClick:function(){return i.anshandle(e)},i:e,disabled:i.state.answered?"1":""})):void 0},i.renderfeedback=function(){if(!0===i.state.answered&&i.state.questionnow>0&&i.state.questionnow<=b.length)return l.a.createElement(M,{questionnow:i.state.questionnow,history:i.state.history})},i.renderreview=function(){if(i.state.questionnow===b.length+1)return!1===i.state.zawarudo&&i.setState({zawarudo:!0}),l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(A,{history:i.state.history,usedtime:i.state.usedtime,score:i.state.score,setscore:i.setscore,scormupdated:i.state.scormupdated,setscormupdate:i.setscormupdate}))},i.renderbutton=function(){var e="",t="";return 0===i.state.questionnow?(e="Start",t=""):(e="Next",t=!0===i.state.answered||!0===i.state.review?"":"1"),l.a.createElement(E,{value:e,onClick:function(){return i.nextbutton()},disabled:t})},i.rendertimer=function(){if(!1===i.state.zawarudo)return l.a.createElement("div",null,"You have used ",i.state.usedtime," seconds ",l.a.createElement("br",null),l.a.createElement("br",null))},i.anshandle=function(e){var t=i.state.history.slice();i.state.questionnow>0&&i.state.questionnow<=b.length&&(t[i.state.questionnow-1]=e,i.setState({history:t,answered:!0}))},i.nextbutton=function(){var e=i.state.questionnow+1;-1===i.state.usedtime&&!0===i.state.zawarudo&&i.setState({usedtime:0,zawarudo:!1}),e>b.length&&i.setState({review:!0}),e>b.length+1&&(e=1),!0===i.state.review?i.setState({questionnow:e,answered:!0}):i.setState({questionnow:e,answered:!1})},i.settime=function(){!1===i.state.zawarudo&&i.setState({usedtime:l.a.createElement(g.a,null,l.a.createElement(g.a.Seconds,null))})},i.setscormupdate=function(){i.setState({scormupdated:!i.state.scormupdated})},i.setscore=function(e){i.setState({score:e})},i.printuserinfo=function(){return!0===i.state.scormupdated&&i.scormupdate(),l.a.createElement("div",null)},i.state={questionnow:0,answered:!1,history:Array(b.length).fill(null),review:!1,usedtime:-1,zawarudo:!0,score:-1,scormupdated:!1},i}return Object(i.a)(n,[{key:"scormupdate",value:function(){v.SCORM.data.set("cmi.core.lesson_status","completed"),v.SCORM.data.set("cmi.core.score.raw",this.state.score),v.SCORM.data.set("cmi.objectives.0.id","label"),v.SCORM.data.set("cmi.objectives.0.status","completed"),v.SCORM.data.set("cmi.interactions.0.objectives.0.id","testing"),v.SCORM.data.set("cmi.objectives.0.completion_status","completed"),console.log(this.state.history.length);for(var e=0;e<this.state.history.length;e++)v.SCORM.data.set("cmi.interactions."+e+".id",e+1),v.SCORM.data.set("cmi.interactions."+e+".student_response",this.state.history[e]+1),"1"===b[e].answer[this.state.history[e]].fraction?v.SCORM.data.set("cmi.interactions."+e+".result","correct"):v.SCORM.data.set("cmi.interactions."+e+".result","wrong"),v.SCORM.data.set("cmi.interactions."+e+".objectives.0.id","label");this.setscormupdate()}},{key:"render",value:function(){return setInterval(this.settime,1e3),l.a.createElement("div",null,this.rendertimer(),this.printuserinfo(),l.a.createElement(w,{display:this.state.questionnow}),l.a.createElement(C,{questionnow:this.state.questionnow}),this.renderimg(),this.renderans(0),this.renderans(1),this.renderans(2),this.renderans(3),this.renderfeedback(),this.renderreview(),this.renderbutton())}}]),n}(l.a.Component),y=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){v.SCORM.connection.initialize()}},{key:"componentWillUnmount",value:function(){v.SCORM.connection.terminate()}},{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("h1",null,"Self-learning exercise"),l.a.createElement(h.a,{body:!0},l.a.createElement(P,null)))}}]),n}(l.a.Component);d.a.render(l.a.createElement(y,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"questionnumber":"1","questiontext":"Which of the following statement(s) represent(s) Aristotle\u2019s view on reality?\\n(1) Sensible objects are eternal. \\n(2) Existence of sensible objects depends on forms.\\n(3) Reality is not found in the realm of forms.","image":"./image/picture1.png","answer":[{"fraction":"0","ans":"(2) only","feedback":"Read Chap. 3, Para. 3-4"},{"fraction":"1","ans":"(3) only","feedback":"Correct"},{"fraction":"0","ans":"(1) and (2) only","feedback":"Read Chap. 3, Para. 3-4"},{"fraction":"0","ans":"(2) and (3) only","feedback":"Read Chap. 3, Para. 3-4"}]},{"questionnumber":"2","questiontext":"Concerning \u2018form\u2019 and \u2018matter\u2019, Aristotle said that\u2026","image":"","answer":[{"fraction":"1","ans":"\u2018form\u2019 represents the properties of sensible objects.","feedback":"Correct"},{"fraction":"0","ans":"\u2019form\u2019 and \u2018matter\u2019 exist independently.","feedback":"Read Chap. 3, Para. 7-8"},{"fraction":"0","ans":"\u2018matter\u2019 can be reduced to  four elements.","feedback":"Read Chap. 3, Para. 3-4"},{"fraction":"0","ans":"\u2018form\u2019 is the perfect idea of a sensible object.","feedback":"Read Chap. 3, Para. 3-4"}]},{"questionnumber":"3","questiontext":"The 1st statement: Aristotle suggested that sense experience is necessary for obtaining true knowledge. \\nThe 2nd statement: True knowledge could only be obtained by people having a good intuition.","image":"","answer":[{"fraction":"0","ans":"Both statements are correct, and the 2nd statement is a correct explanation of the 1st statement.","feedback":"Read Chap. 3, Para. 10"},{"fraction":"0","ans":"Both statements are correct, but the 2nd statement is NOT a correct explanation of the 1st","feedback":"Read Chap. 3, Para. 10"},{"fraction":"1","ans":"The 1st statement is correct, but the 2nd statement is incorrect.","feedback":"Correct"},{"fraction":"0","ans":"The 1st statement is incorrect, but the 2nd statement is correct.","feedback":"Read Chap. 3, Para. 10"}]},{"questionnumber":"4","questiontext":"Which of the following statement(s) represent(s) Aristotle\u2019s view on reality?\\n(1) Sensible objects are eternal. \\n(2) Existence of sensible objects depends on forms.\\n(3) Reality is not found in the realm of forms.","image":"./image/picture2.png","answer":[{"fraction":"0","ans":"(2) only","feedback":"Read Chap. 3, Para. 3-4"},{"fraction":"1","ans":"(3) only","feedback":"Correct"},{"fraction":"0","ans":"(1) and (2) only","feedback":"Read Chap. 3, Para. 3-4"},{"fraction":"0","ans":"(2) and (3) only","feedback":"Read Chap. 3, Para. 3-4"}]}]')},30:function(e,t,n){},6:function(e,t,n){var a,i,s;!function(n,r){"use strict";i=[],void 0===(s="function"===typeof(a=function(){var e={UTILS:{},debug:{isActive:!0},SCORM:{version:null,handleCompletionStatus:!0,handleExitMode:!0,API:{handle:null,isFound:!1},connection:{isActive:!1},data:{completionStatus:null,exitStatus:null},debug:{}}};return e.SCORM.isAvailable=function(){return!0},e.SCORM.API.find=function(t){for(var n=null,a=0,i=e.UTILS.trace,s=e.SCORM;!t.API&&!t.API_1484_11&&t.parent&&t.parent!=t&&a<=500;)a++,t=t.parent;if(s.version)switch(s.version){case"2004":t.API_1484_11?n=t.API_1484_11:i("SCORM.API.find: SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");break;case"1.2":t.API?n=t.API:i("SCORM.API.find: SCORM version 1.2 was specified by user, but API cannot be found.")}else t.API_1484_11?(s.version="2004",n=t.API_1484_11):t.API&&(s.version="1.2",n=t.API);return n?(i("SCORM.API.find: API found. Version: "+s.version),i("API: "+n)):i("SCORM.API.find: Error finding API. \nFind attempts: "+a+". \nFind attempt limit: 500"),n},e.SCORM.API.get=function(){var t=null,n=window,a=e.SCORM,i=a.API.find,s=e.UTILS.trace;return!(t=i(n))&&n.parent&&n.parent!=n&&(t=i(n.parent)),!t&&n.top&&n.top.opener&&(t=i(n.top.opener)),!t&&n.top&&n.top.opener&&n.top.opener.document&&(t=i(n.top.opener.document)),t?a.API.isFound=!0:s("API.get failed: Can't find the API!"),t},e.SCORM.API.getHandle=function(){var t=e.SCORM.API;return t.handle||t.isFound||(t.handle=t.get()),t.handle},e.SCORM.connection.initialize=function(){var t=!1,n=e.SCORM,a=n.data.completionStatus,i=e.UTILS.trace,s=e.UTILS.StringToBoolean,r=n.debug,o="SCORM.connection.initialize ";if(i("connection.initialize called."),n.connection.isActive)i(o+"aborted: Connection already active.");else{var c=n.API.getHandle(),l=0;if(c){switch(n.version){case"1.2":t=s(c.LMSInitialize(""));break;case"2004":t=s(c.Initialize(""))}if(t)if(null!==(l=r.getCode())&&0===l){if(n.connection.isActive=!0,n.handleCompletionStatus&&(a=n.status("get"))){switch(a){case"not attempted":case"unknown":n.status("set","incomplete")}n.save()}}else t=!1,i(o+"failed. \nError code: "+l+" \nError info: "+r.getInfo(l));else i(null!==(l=r.getCode())&&0!==l?o+"failed. \nError code: "+l+" \nError info: "+r.getInfo(l):o+"failed: No response from server.")}else i(o+"failed: API is null.")}return t},e.SCORM.connection.terminate=function(){var t=!1,n=e.SCORM,a=n.data.exitStatus,i=n.data.completionStatus,s=e.UTILS.trace,r=e.UTILS.StringToBoolean,o=n.debug;if(n.connection.isActive){var c=n.API.getHandle(),l=0;if(c){if(n.handleExitMode&&!a)if("completed"!==i&&"passed"!==i)switch(n.version){case"1.2":t=n.set("cmi.core.exit","suspend");break;case"2004":t=n.set("cmi.exit","suspend")}else switch(n.version){case"1.2":t=n.set("cmi.core.exit","logout");break;case"2004":t=n.set("cmi.exit","normal")}if(t="1.2"!==n.version||n.save()){switch(n.version){case"1.2":t=r(c.LMSFinish(""));break;case"2004":t=r(c.Terminate(""))}t?n.connection.isActive=!1:s("SCORM.connection.terminate failed. \nError code: "+(l=o.getCode())+" \nError info: "+o.getInfo(l))}}else s("SCORM.connection.terminate failed: API is null.")}else s("SCORM.connection.terminate aborted: Connection already terminated.");return t},e.SCORM.data.get=function(t){var n=null,a=e.SCORM,i=e.UTILS.trace,s=a.debug,r="SCORM.data.get('"+t+"') ";if(a.connection.isActive){var o=a.API.getHandle(),c=0;if(o){switch(a.version){case"1.2":n=o.LMSGetValue(t);break;case"2004":n=o.GetValue(t)}if(c=s.getCode(),""!==n||0===c)switch(t){case"cmi.core.lesson_status":case"cmi.completion_status":a.data.completionStatus=n;break;case"cmi.core.exit":case"cmi.exit":a.data.exitStatus=n}else i(r+"failed. \nError code: "+c+"\nError info: "+s.getInfo(c))}else i(r+"failed: API is null.")}else i(r+"failed: API connection is inactive.");return i(r+" value: "+n),String(n)},e.SCORM.data.set=function(t,n){var a=!1,i=e.SCORM,s=e.UTILS.trace,r=e.UTILS.StringToBoolean,o=i.debug,c="SCORM.data.set('"+t+"') ";if(i.connection.isActive){var l=i.API.getHandle(),u=0;if(l){switch(i.version){case"1.2":a=r(l.LMSSetValue(t,n));break;case"2004":a=r(l.SetValue(t,n))}a?"cmi.core.lesson_status"!==t&&"cmi.completion_status"!==t||(i.data.completionStatus=n):s(c+"failed. \nError code: "+(u=o.getCode())+". \nError info: "+o.getInfo(u))}else s(c+"failed: API is null.")}else s(c+"failed: API connection is inactive.");return s(c+" value: "+n),a},e.SCORM.data.save=function(){var t=!1,n=e.SCORM,a=e.UTILS.trace,i=e.UTILS.StringToBoolean;if(n.connection.isActive){var s=n.API.getHandle();if(s)switch(n.version){case"1.2":t=i(s.LMSCommit(""));break;case"2004":t=i(s.Commit(""))}else a("SCORM.data.save failed: API is null.")}else a("SCORM.data.save failed: API connection is inactive.");return t},e.SCORM.status=function(t,n){var a=!1,i=e.SCORM,s=e.UTILS.trace,r="";if(null!==t){switch(i.version){case"1.2":r="cmi.core.lesson_status";break;case"2004":r="cmi.completion_status"}switch(t){case"get":a=i.data.get(r);break;case"set":null!==n?a=i.data.set(r,n):(a=!1,s("SCORM.getStatus failed: status was not specified."));break;default:a=!1,s("SCORM.getStatus failed: no valid action was specified.")}}else s("SCORM.getStatus failed: action was not specified.");return a},e.SCORM.debug.getCode=function(){var t=e.SCORM,n=t.API.getHandle(),a=e.UTILS.trace,i=0;if(n)switch(t.version){case"1.2":i=parseInt(n.LMSGetLastError(),10);break;case"2004":i=parseInt(n.GetLastError(),10)}else a("SCORM.debug.getCode failed: API is null.");return i},e.SCORM.debug.getInfo=function(t){var n=e.SCORM,a=n.API.getHandle(),i=e.UTILS.trace,s="";if(a)switch(n.version){case"1.2":s=a.LMSGetErrorString(t.toString());break;case"2004":s=a.GetErrorString(t.toString())}else i("SCORM.debug.getInfo failed: API is null.");return String(s)},e.SCORM.debug.getDiagnosticInfo=function(t){var n=e.SCORM,a=n.API.getHandle(),i=e.UTILS.trace,s="";if(a)switch(n.version){case"1.2":s=a.LMSGetDiagnostic(t);break;case"2004":s=a.GetDiagnostic(t)}else i("SCORM.debug.getDiagnosticInfo failed: API is null.");return String(s)},e.SCORM.init=e.SCORM.connection.initialize,e.SCORM.get=e.SCORM.data.get,e.SCORM.set=e.SCORM.data.set,e.SCORM.save=e.SCORM.data.save,e.SCORM.quit=e.SCORM.connection.terminate,e.UTILS.StringToBoolean=function(e){switch(typeof e){case"object":case"string":return/(true|1)/i.test(e);case"number":return!!e;case"boolean":return e;case"undefined":return null;default:return!1}},e.UTILS.trace=function(t){e.debug.isActive&&window.console&&window.console.log&&window.console.log(t)},e})?a.apply(t,i):a)||(e.exports=s)}()}},[[23,1,2]]]);
//# sourceMappingURL=main.5c14de5a.chunk.js.map
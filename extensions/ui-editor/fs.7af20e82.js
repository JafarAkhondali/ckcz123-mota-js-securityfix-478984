(function(){window.fs={};var u=function(e){return!(e==null||e==null||typeof e=="number"&&isNaN(e))},p=function(e,r,n,i,t,s,l){var f=new XMLHttpRequest;f.open(e,r,!0),u(s)&&f.overrideMimeType(s),u(l)&&(f.responseType=l),f.onload=function(y){f.status==200?u(i)&&i(f.response):u(t)&&t("HTTP "+f.status)},f.onabort=function(){u(t)&&t("Abort")},f.ontimeout=function(){u(t)&&t("Timeout")},f.onerror=function(){u(t)&&t("Error on Connection")},u(n)?f.send(n):f.send()},o=function(e,r,n){(typeof e==typeof[][0]||e==null)&&(e=JSON.stringify({1:2})),p("POST",r,e,function(i){i.slice(0,6)=="error:"?n(i,null):n(null,i)},function(i){window.main!=null,console.log(i),n(i+"\uFF1A\u8BF7\u68C0\u67E5\u542F\u52A8\u670D\u52A1\u662F\u5426\u5904\u4E8E\u6B63\u5E38\u8FD0\u884C\u72B6\u6001\u3002")},"text/plain; charset=x-user-defined")};fs.readFile=function(e,r,n){if(typeof e!="string")throw"Type Error in fs.readFile";if(r=="utf-8"){var i="";i+="type=utf8&",i+="name="+e,o(i,"/readFile",n);return}if(r=="base64"){var i="";i+="type=base64&",i+="name="+e,o(i,"/readFile",n);return}throw"Type Error in fs.readFile"},fs.writeFile=function(e,r,n,i){if(typeof e!="string"||typeof r!="string")throw"Type Error in fs.writeFile";if(n=="utf-8"){var t="";t+="type=utf8&",t+="name="+e,t+="&value="+r,o(t,"/writeFile",i);return}if(n=="base64"){var t="";t+="type=base64&",t+="name="+e,t+="&value="+r,o(t,"/writeFile",i);return}throw"Type Error in fs.writeFile"},fs.writeMultiFiles=function(e,r,n){o("name="+e.join(";")+"&value="+r.join(";"),"/writeMultiFiles",n)},fs.readdir=function(e,r){if(typeof e!="string")throw"Type Error in fs.readdir";var n="";n+="name="+e,o(n,"/listFile",function(i,t){try{t=JSON.parse(t)}catch{i="Invalid /listFile",t=null}r(i,t)})},fs.mkdir=function(e,r){if(typeof e!="string")throw"Type Error in fs.readdir";var n="";n+="name="+e,o(n,"/makeDir",r)},fs.moveFile=function(e,r,n){if(typeof e!="string"||typeof r!="string")throw"Type Error in fs.readdir";var i="";i+="src="+e+"&dest="+r,o(i,"/moveFile",n)},fs.deleteFile=function(e,r){if(typeof e!="string")throw"Type Error in fs.readdir";var n="";n+="name="+e,o(n,"/deleteFile",r)}})();
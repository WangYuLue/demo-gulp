function IdentityCodeValid(t){var n=t=function(t){var n=t.split("");return n.forEach(function(t,r){"x"===t&&(n[r]="X")}),n.join("")}(t),r=!0;if(t&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(t))if({11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "}[t.substr(0,2)]){if(18==t.length){t=t.split("");for(var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],s=[1,0,"X",9,8,7,6,5,4,3,2],i=0,u=0;u<17;u++)i+=t[u]*e[u];s[i%11]!=t[17]&&("校验位错误",r=!1)}}else"地址编码错误",r=!1;else"身份证号格式错误",r=!1;return function(t){return new Date(t).getDate()==t.substring(t.length-2)}(function(t){var n="";if(18===t.length)n=t.substring(6,14);else{if(15!==t.length)return"";n="19"+t.substring(6,12)}return n=n.substr(0,4)+"-"+n.substr(4,2)+"-"+n.substr(6,2)}(n))||(r=!1,"日期格式不正确"),r}
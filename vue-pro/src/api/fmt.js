export default{
  // 日期格式化 对Date的扩展，将 Date 转化为指定格式的String   
  // 例: (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
  //     (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18  
  install(Vue){
    Date.prototype.Format = function(fmt){
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S" : this.getMilliseconds()
      };
      if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for(var k in o){
        if(new RegExp("(" + k + ")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return fmt;
    }
  }
}

    // function fun(n, o) {
    //   console.log(o)
    //   return {
    //     fun: function (m) {
    //       return fun(m, n);
    //     }
    //   };
    // }
    function fun(n, o) {
      console.log(o)
      return {
        fun: (m) => {
          console.log('--',m,n)
          return fun(m, n);
        }
      };
    }
    var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,?,?,?
    
    var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
    //fun(1,0).fun(2) === fun(0).fun(1).fun(2)
    //fun(2,1).fun(3) === fun(0).fun(1).fun(2).fun(3)
    
    var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,?,?,?
    //问:三行a,b,c的输出分别是什么？

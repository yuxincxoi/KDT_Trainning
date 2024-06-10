function a() {
  function b() {
    function c() {
      function d() {
        function e() {
          function f() {
            console.log("f");
          }
          f();
        }
        e();
      }
      d();
    }
    c();
  }
  b();
}

a();

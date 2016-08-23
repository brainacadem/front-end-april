(function() {
   function Module() {
       this.name = 'Hello';
   }


   Module.prototype.getName = function() {
       return this.name;
   };

   window.Modules = window.Modules || {};
   window.Modules = new Module()
})();
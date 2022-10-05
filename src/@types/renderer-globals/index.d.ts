export {}

declare global {
  namespace windowBridge {
    function closeApp() : void;
    function maximizeApp() : void;
    function unMaximizeApp() : void;
    function reduceApp() : void;
  }
}

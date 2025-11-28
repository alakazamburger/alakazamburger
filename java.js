function copybmcode() {
  const s = `javascript:var username = location.hostname.split(".github.io").join(""); var path = location.pathname.slice(1); var slashIndex = path.indexOf("/"); if (slashIndex != -1) {path = path.slice(0,slashIndex)}; (function(){window.location.assign(location.protocol+'//'+'github.com:'+location.port+'/'+username+'/'+path)})();`
  navigator.clipboard.writeText(s)
}

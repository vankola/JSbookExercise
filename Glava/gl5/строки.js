function checkSpam(str) {
    let lo = str.toLowerCase();
  
    return lo.includes('viagra') || lo.includes('xxx');
  }
  
  console.log( checkSpam('buy ViAgRA now') );
  console.log( checkSpam('free xxxxx') );
  console.log( checkSpam("innocent rabbit") );
  
  
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
  console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
  console.log(truncate("Всем привет!", 20));
  
  
  
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  console.log( extractCurrencyValue('%235'))
  
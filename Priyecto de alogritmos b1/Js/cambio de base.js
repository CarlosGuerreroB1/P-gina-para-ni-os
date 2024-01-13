class proyecto {
    
   
    calbase10a2(n) {
      let res = "";
  
      if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
        return "Número no válido";
      }
  
      if (n === 0) {
        return "0";
      }
  
      while (n > 0) {
        res = (n % 2) + res;
        n = Math.floor(n / 2);
      }
  
      return res;
    }
  
    base10a2() {
      let n = 0, resultado = 0, resp;
  
      n = document.getElementById("n").value;
      n = parseInt(n);
  
      resp = document.getElementById("resp");
      resultado = this.calbase10a2(n);
      resp.innerHTML = `La transformación de base 10 a 2 es: ${resultado}`;
    }
    // ejercicio 16
    calbase10a8(n) {
      let res = "";
  
      if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
        return "Número no válido";
      }
  
      if (n === 0) {
        return "0";
      }
  
      while (n > 0) {
        res = (n % 8) + res;
        n = Math.floor(n / 8);
      }
  
      return res;
    }
  
    base10a8() {
      let n = 0, resultado = 0, resp;
  
      n = document.getElementById("n").value;
      n = parseInt(n);
  
      resp = document.getElementById("resp");
      resultado = this.calbase10a8(n);
      resp.innerHTML = `La transformación de base 10 a 8 es: ${resultado}`;
    }
    // ejercicio 17
    calbase10a16(n) {
      let res = "";
  
      if (isNaN(n) || n < 0 || Math.floor(n) !== n) {
        return "Número no válido";
      }
  
      if (n === 0) {
        return "0";
      }
  
      while (n > 0) {
        res = (n % 16) + res;
        n = Math.floor(n / 16);
      }
  
      return res;
    }
  
    base10a16() {
      let n = 0, resultado = 0, resp;
  
      n = document.getElementById("n").value;
      n = parseInt(n);
  
      resp = document.getElementById("resp");
      resultado = this.calbase10a16(n);
      resp.innerHTML = `La transformación de base 10 a 16 es: ${resultado}`;
    }
    celciusfarenheit(celc) {
        let resul = 0
        resul = (celc * 9 / 5) + 32
        return resul
      }
      celcifaren() {
        let cel = 0, resp, r
        cel = document.getElementById("cel").value
        cel = parseFloat(cel)
        r = this.celciusfarenheit(cel)
        resp = document.getElementById("resp")
        resp.innerHTML = `(${cel} * 9/5) + 32 = ${r}`
    
      }
    
    
    
  }
  
  
  let ope = new proyecto()
  
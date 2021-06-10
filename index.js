const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let cryptoSymbol = document.getElementById("crypto-symbol");
  let response = await axios.get(
    `https://api.cryptonator.com/api/ticker/${cryptoSymbol.value}-usd`
  );
  cryptoSymbol.value = "";

  let cryptoList = document.getElementById("crypto-list");
  let cryptoInfo = document.createElement("li");

  cryptoInfo.append(
    `${response.data.ticker.base} - ${response.data.ticker.price}`
  );
  cryptoList.append(cryptoInfo);
});

const btn = document.getElementById("connect");

const ethEnabled = async () => {
  if (!window.ethereum) return;

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(accounts);
};

btn.addEventListener("click", ethEnabled);

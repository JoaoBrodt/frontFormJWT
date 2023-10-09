const API = "http://localhost:8080/";

const userName = document.getElementById("userName").value;
const password = document.getElementById("password").value;


async function autenticaUsuario(
    userName,
    password,
  ) {
    const conexao = await fetch(`${API}/auth`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
    if(conexao.ok){
        const tokenJwt = await conexao.json();
        return tokenJwt;
    }
  }
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('User', 'u@u.com', '2021-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Admin', 'a@a.com', '2021-01-01');
console.log(novoAdmin.exibirInfos());

novoAdmin.nome = '';
console.log(novoAdmin.nome)

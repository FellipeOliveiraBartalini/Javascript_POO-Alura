import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Fellipe', 'f@f.com', '2021-01-01');
console.log(novoUser.exibirInfos());

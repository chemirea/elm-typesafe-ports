import { Elm } from "./Main.elm"

const app = Elm.Main.init({
    node: document.getElementById('elm'),
    flags: 114514
});

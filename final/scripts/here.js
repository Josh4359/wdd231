import { wrap } from "./utility.mjs"

const messages = [
    "Here to help you plan for your school website projects.",
    "Still here to help you plan for your school projects.",
    "<i>We're</i> here, but we're beginning to wonder whether or not <i>you</i> are...",
    `We give up. We are no longer here to help you plan for your school website projects...
        <br>
        <i>...or are we?</i>`
]

let visits = Number(localStorage.getItem("visits"));
visits = wrap(visits, messages.length);

const here = document.querySelector('#here');

here.innerHTML = messages[visits];

localStorage.setItem("visits", visits + 1);
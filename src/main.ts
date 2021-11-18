import { sayHello } from "./greet"

function showHello(divId: string, name: string) {
  const e = document.getElementById(divId)
  e.innerHTML = sayHello(name)
}

showHello("greeting", "TypeScript WOW")
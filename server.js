let mcp = require("minecraft-protocol");
let config = require("./config");
let f = require("./format");
const { execSync } = require('child_process');
let logger = require('./logger');
let mc;
let ec = 0;

// Console input.
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.on("line", (i) => {
	if (i == "help") {
		console.log(`${f.green}help${f.reset} - this page.`);
		console.log(`${f.green}stop${f.reset} - stop the server.`);
	}
	if (i == "stop") {
		console.log(`${f.green}Goodbye!`);
		process.exit();
	}
});

// And a merry christmas to all!
process.on('SIGINT', async () => {
    console.log(`${f.green}Goodbye!`);
    process.exit();
});

try { // Safety first!

// startServer function. It'll end the fake server and put up the real one.
// If the real server ends it'll restart the fake one. Inception I say!
function startServer(c) {
    c.end(config.kickMessage);
    mc.close();
    execSync(config.launchCommand, {
        cwd: config.runDir,
        stdio: "inherit",
        shell: true
    });

    console.log(`${f.red}Restarting MCSleeper in ${config.restartTime} seconds!`);
    setTimeout(function(){
        console.log(`${f.green}Restarting MCSleeper`);
        main();
    }, config.restartTime * 1000);
}

// The main function. Creates the fake server and listens for connections.
function main() {
    mc = mcp.createServer({
        "online-mode": config.onlineMode,
        encryption: false,
        host: "0.0.0.0",
        port: config.serverPort,
        version: "1.17.1",
        maxPlayers: config.maxPlayers,
        motd: config.motdMessage,
        beforePing: function(r) {
            r.favicon = config.favicon;
        }
    });

    mc.on("connection", function(c) {
        if (config.onViewMessages)
            console.log(`Someone just viewed the server: ${f.yellow}${c.socket.address()['address']}`);
        if (config.startOnView) {
            console.log(`${f.green}Starting the server!`);
            startServer(c);
        }
    });
    
    mc.on("login", function(c) {
        console.log(`Player ${f.green}${c.username}${f.reset} just tried to join, ${f.green}starting the server!`);
        startServer(c);
    });

    console.log(`${f.cyan}Waiting for connections!\n`);
}

console.log(`${f.green}Starting MCSleeper`);

if (config.sure) main();
else console.error("Please configurate the plugin in config.js!!");

} catch(e) {
    ec++;
    console.error(`(${ec}) MCSleeper: ${e}`);
    if(ec <= config.errorLimit) main();
}
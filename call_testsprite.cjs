const { spawn } = require('child_process');
const fs = require('fs');

function execMcpTool(toolName, params, id = 1) {
    return new Promise((resolve, reject) => {
        const p = spawn('npx.cmd', ['-y', '@testsprite/testsprite-mcp@latest'], {
            env: { ...process.env, TESTSPRITE_API_KEY: 'sk-user-K1tzeGLp6QW77QmfrgUM2fGeGOeXTO5F4fCeGcn_l2yuZJyYyRS8AdqyNJrq9sXyBYZj7a2fBWfXFCMwYApGBI1jTriiXAY0JpUnrq9xzUw2IATiDbcUkWMRR9gI3Vg0wRk' },
            shell: true,
            stdio: ['pipe', 'pipe', 'inherit']
        });

        let out = '';
        p.stdout.on('data', d => {
            out += d.toString();
            // console.error("DEBUG:", d.toString());
            const lines = out.split('\n');
            for (let line of lines) {
                if (line.trim() === '') continue;
                try {
                    const parsed = JSON.parse(line);
                    if (parsed.id === id) {
                        resolve(parsed);
                        p.kill();
                        return;
                    }
                } catch (e) { }
            }
        });

        const req = JSON.stringify({
            jsonrpc: "2.0",
            id: id,
            method: "tools/call",
            params: {
                name: toolName,
                arguments: params
            }
        });

        // console.error("SENDING:", req);
        p.stdin.write(req + '\r\n');

        // Extend timeout for testsprite test generation
        setTimeout(() => {
            reject(new Error("Timeout waiting for response. Output so far: " + out));
            p.kill();
        }, 300000);
    });
}

const args = process.argv.slice(2);
const toolName = args[0];
const paramsFile = args[1];
const params = JSON.parse(fs.readFileSync(paramsFile, 'utf8'));

execMcpTool(toolName, params).then(res => {
    console.log(JSON.stringify(res, null, 2));
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});

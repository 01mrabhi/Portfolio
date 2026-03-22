const { spawn } = require('child_process');

function execMcpMethod(method, params, id = 1) {
    return new Promise((resolve, reject) => {
        const p = spawn('npx.cmd', ['-y', '@testsprite/testsprite-mcp@latest'], {
            env: { ...process.env, TESTSPRITE_API_KEY: 'sk-user-K1tzeGLp6QW77QmfrgUM2fGeGOeXTO5F4fCeGcn_l2yuZJyYyRS8AdqyNJrq9sXyBYZj7a2fBWfXFCMwYApGBI1jTriiXAY0JpUnrq9xzUw2IATiDbcUkWMRR9gI3Vg0wRk' },
            shell: true,
            stdio: ['pipe', 'pipe', 'inherit']
        });

        let out = '';
        p.stdout.on('data', d => {
            out += d.toString();
            const lines = out.split('\n');
            for (let line of lines) {
                if (line.trim() === '') continue;
                try {
                    const parsed = JSON.parse(line);
                    if (parsed.id === id || parsed.method === method) {
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
            method: method,
            params: params
        });

        p.stdin.write(req + '\r\n');

        setTimeout(() => {
            reject(new Error("Timeout waiting for response. Output so far: " + out));
            p.kill();
        }, 10000);
    });
}

execMcpMethod('tools/list', {}).then(res => {
    console.log(JSON.stringify(res, null, 2));
}).catch(console.error);

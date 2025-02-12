const fs = require('fs');
const path = require('path');

function copyFile(source, target) {
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.copyFileSync(source, target);
}

// Copy CSS files
const cssDir = path.join(__dirname, '../.next/static/css');
const targetCssDir = path.join(__dirname, '../out/styles');

if (fs.existsSync(cssDir)) {
    const files = fs.readdirSync(cssDir);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    if (!fs.existsSync(targetCssDir)) {
        fs.mkdirSync(targetCssDir, { recursive: true });
    }

    cssFiles.forEach(file => {
        copyFile(
            path.join(cssDir, file),
            path.join(targetCssDir, 'globals.css')
        );
    });
}

// Copy other static assets if needed
const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');

if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    files.forEach(file => {
        const sourcePath = path.join(publicDir, file);
        const targetPath = path.join(outDir, file);
        if (fs.lstatSync(sourcePath).isDirectory()) {
            fs.cpSync(sourcePath, targetPath, { recursive: true });
        } else {
            copyFile(sourcePath, targetPath);
        }
    });
}

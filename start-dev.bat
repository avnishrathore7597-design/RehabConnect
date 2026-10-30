@echo off
set "PATH=%~dp0node;%PATH%"
cd /d "%~dp0rehabconnect"
echo Starting RehabConnect Server (port 3000) and Client (port 5173)...
npm run dev
pause

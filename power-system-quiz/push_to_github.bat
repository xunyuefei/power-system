@echo off
chcp 65001 >nul
echo ========================================================
echo   正在推送华电《电力系统分析》刷题系统至 GitHub 独立仓库...
echo ========================================================
git push -u origin main
if %errorlevel% equ 0 (
    echo.
    echo [成功] 代码已成功推送到 https://github.com/xunyuefei/power-system-quiz !
    echo 请在 GitHub 仓库中开启 Pages 服务即可在线使用！
) else (
    echo.
    echo [提示] 推送失败，请确认是否已在 GitHub 上创建名为 power-system-quiz 的空仓库。
)
pause

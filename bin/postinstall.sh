#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Install the cnc CLI command
sudo cp "$SCRIPT_DIR/cnc" /usr/local/bin/cnc
sudo chmod +x /usr/local/bin/cnc

# Install the systemd user service
mkdir -p ~/.config/systemd/user
sed "s|__HOME__|$HOME|g" "$SCRIPT_DIR/cnc.service" > ~/.config/systemd/user/cnc.service
systemctl --user daemon-reload
systemctl --user enable cnc

# Install the .desktop file
mkdir -p ~/.local/share/applications
sed "s|__HOME__|$HOME|g" "$SCRIPT_DIR/cnc.desktop" > ~/.local/share/applications/cnc.desktop

echo "Installation complete."
echo "  Start:  cnc start"
echo "  Stop:   cnc stop"

#!/bin/bash

exec chromium-browser \
 --noerrdialogs \
 --disable-infobars \
 --disable-web-security \
 --user-data-dir="/tmp/chrome-dev" \
 --allow-file-access-from-files \
 --overscroll-history-navigation=0 \
 --window-size=1920,550 \
 --window-position=0,0 \
 --app="http://10.0.0.173:3333"
 
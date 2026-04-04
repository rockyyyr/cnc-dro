#!/bin/bash
set -e

cd /home/rocky/apps/cnc-dro || exit 1

echo "PWD=$PWD" > /tmp/cnc-launch.log
echo "PATH=$PATH" >> /tmp/cnc-launch.log
which node >> /tmp/cnc-launch.log 2>&1
which npm >> /tmp/cnc-launch.log 2>&1

/usr/bin/npm start >> /tmp/cnc-launch.log 2>&1

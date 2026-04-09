#!/bin/bash
set -e

cd /home/rocky/apps/cnc-dro || exit 1

echo "PWD=$PWD"
echo "PATH=$PATH"
which node
which npm

exec /usr/bin/npm start

#!/bin/bash

npm run build
rm -rf build
mkdir build
cp -R ./public/* ./build
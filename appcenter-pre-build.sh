#!/usr/bin/env bash

cd $APPCENTER_SOURCE_DIRECTORY
npm install

cd ios
pod install

cd $APPCENTER_SOURCE_DIRECTORY

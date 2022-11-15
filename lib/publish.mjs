#!/usr/bin/env zx
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
await $ `yarn build`;
await $ `yarn version --patch`;
await $ `yarn publish --access public`;

#!/usr/bin/env zx

await $`yarn build`

await $`yarn version --patch`

await $`yarn publish --access public`

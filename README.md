# all-envs-config


## Important

1. The dist directory is the package content when used as a dependency used by other apps, so remember to run 'gulp dist'
2. Each folder that contain the ENV.json must named with the app name and the name must be kept in conf.js (exports.apps), 
  e.g  exports.apps = {act: "ACT"}

## Repo structure

```
 /dist
 /gulp
 /node_modules
 /src
     /envs
        /appName1
            ENV.json
        /appName2
            ENV.json 
        .
        .
        .
 .gitignore
  bower.json
  gulpfile.js
  package.json
  README.md
```

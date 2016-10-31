# all-envs-config


## Important

1. The dist directory is the package content that used as a dependency by other apps, so remember to run 'gulp dist'
2. Each folder that contain the ENV.json must named with the app name, the app name must be kept in conf.js as a property in the object exports.apps, where the key is the app name with small letters and the value is the app name with capital letters (e.g  exports.apps = {act: "ACT"}) 

## Repo structure

```
 /dist
 /gulp
 /node_modules
 /src
     /envs
        /appName1
            env.json
        /appName2
            env.json 
        .
        .
        .
 .gitignore
  bower.json
  gulpfile.js
  package.json
  README.md
```

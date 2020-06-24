# mija-react-split

used 
 1. node v12.16.3 
 2. yarn 1.22.4 

run app
 1. yarn install
 2. yarn start

when run this app 
```
 Uncaught TypeError: split_js__WEBPACK_IMPORTED_MODULE_2___default(...) is not a function
     at SplitWrapper.componentDidMount (react-split.es.js:46)
     at commitLifeCycles (react-dom.development.js:19690)
     at commitLayoutEffects (react-dom.development.js:22662)
     at HTMLUnknownElement.callCallback (react-dom.development.js:189)
     at Object.invokeGuardedCallbackDev (react-dom.development.js:238)
     at invokeGuardedCallback (react-dom.development.js:291)
     at commitRootImpl (react-dom.development.js:22404)
     at unstable_runWithPriority (scheduler.development.js:659)
     at runWithPriority$1 (react-dom.development.js:11077)
     at commitRoot (react-dom.development.js:22246)
     at finishSyncRender (react-dom.development.js:21663)
     at performSyncWorkOnRoot (react-dom.development.js:21649)
     at scheduleUpdateOnFiber (react-dom.development.js:21045)
     at updateContainer (react-dom.development.js:24194)
     at react-dom.development.js:24577
     at unbatchedUpdates (react-dom.development.js:21763)
     at legacyRenderSubtreeIntoContainer (react-dom.development.js:24576)
     at Object.render (react-dom.development.js:24659)
     at Module../src/index.js (main.chunk.js:108)
     at __webpack_require__ (bootstrap:782)
     at fn (bootstrap:150)
     at Object.0 (main.chunk.js:127)
     at __webpack_require__ (bootstrap:782)
     at checkDeferredModules (bootstrap:45)
     at Array.webpackJsonpCallback [as push] (bootstrap:32)
     at main.chunk.js:1
```
when I change in app to split.js 1.5.9-11 is working 
- move yarn.lock.ok -> yarn.lock
- yarn install 
- yarn start  
- and working 
// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 03. 基本の型定義

import { primitiveSample, notExist, anySample, unknownSample } from "./basic";

primitiveSample()
notExist()
anySample()
unknownSample()

// 04.関数の型定義
import { logMessage, logMessage5 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
logMessage5('Hello Type Signature!')
isUserSignedIn('ABC', 'Hello')
isUserSignedIn('123')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(1000, 2000, 500, 3000, 250)
console.log('Function parameters sample 5: Total price:', sum)

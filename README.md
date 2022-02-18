# ajna3

## Installation
```shell
npm install --save ajna3
```

## Defining New custom Element

### proto1
```js
import { Ajna } from "ajna3";

export default class AjnaButton extends Ajna.Element() {
  constructor () {
    super();
  }
  connectedCallback () {

  }
}

```

### proto2
```js
import { Ajna } from "ajna3";

Ajna.defineElement("ajna-button", Ajna.Element({
  states {},
  props {},
  hooks: { beforeCreate, created, beforeMount, mounted },
  methods: { method1, method2 },
  render () {},
  template () {}
}))

```

### End Result expected

```js
(function(){
  return function ($Ajna) {
    $Ajna.defineElement(elmName, $Ajna.Element({
      // Element Definition
      render ({ _c, _t, _l }) {
        return _c("div", {
          class: {
            "gls-container": true
          }
        },[
          _d
        ])
      }
    }))
  }
})();
```

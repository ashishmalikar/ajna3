/**
 *
 * e.g.
 *
 * Ajna.defineElement(Ajna.Element({
 *    template: `<button>{{label}}</button>`,
 *    name: "ajna-button",
 *    hooks: {
 *      mounted () {
 *        this.querySelector('button').addEventListener('click', this.handleClick)
 *      },
 *    },
 *    methods: {
 *      handleClick () {
 *        console.log("Handling Click")
 *      }
 *    }
 * }));
 *
 * @param {*} defn
 * @returns
 */
const Element = (defn) => {
  return class extends HTMLElement {
    constructor () {
      super();
      this.name = defn.name

      Object.keys(defn.methods).forEach(methodName=>{
        this[methodName] = defn.methods[methodName]
      })

      this.created = defn?.hooks?.created?.bind(this)
      this.mounted = defn?.hooks?.mounted?.bind(this)

      this.created()

      this.state = {}
      this.props = {}

      for (let i=0; i<this.attributes.length; i++) {
        let attr = this.attributes[i];
        this.state[attr.name] = attr.value;
        this.props[attr.name] = attr.value;
      }
    }
    connectedCallback () {
      this.innerHTML = defn.template.replace("{{label}}", this.props['label'])
      this.mounted()
    }
  }
}
let defineElement = (elm) => {
  window.customElements.define("ajna-button", elm)
}

export const Ajna = {
  Element,
  defineElement
}

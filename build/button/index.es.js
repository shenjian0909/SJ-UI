import { defineComponent, toRefs, createVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "button"
  },
  loading: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: [Function, Array]
  }
};
var Button = defineComponent({
  name: "MButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type,
      size,
      disabled,
      block
    } = toRefs(props);
    console.log("block: ", block.value);
    const blockCls = block.value ? "s-btn--block" : "";
    return () => {
      return createVNode("button", {
        "disabled": disabled.value,
        "class": `s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`
      }, [slots.default ? slots.default() : "\u6309\u94AE"]);
    };
  }
});
var index = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export { Button, index as default };

export default {
  beforeMount(el, binding) {
    let iconClasses = `fa fa-${binding.value} float-right text-green-400 text-xl`;

    // if (binding.arg === "full") {
    //   iconClasses = binding.value;
    // }

    el.innerHTML += `<i class="${iconClasses}" ></i>`;
  }
};

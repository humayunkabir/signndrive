export function updateInput({ target: { name, value, type, checked } }) {
  if (type === "checkbox" || type === "radio") {
    this[name] = checked;
  } else {
    this[name] = value;
  }
  this.$update();
}

export function goTo(path) {
  console.log({ path });

  this.$f7.views.main.router.navigate(path);
}

export function submit(dataKeys, path = "/", message = "", title) {
  if (!dataKeys) return;
  const keys = dataKeys.split(",").map((key) => key.trim());

  const data = {};
  keys.forEach((key) => {
    data[key] = this[key];
  });

  const isValid = !Object.values(data)
    .map((value) => !!value)
    .includes(false);
  console.log(data);

  if (isValid) {
    // Save data to Database
    console.log(data);
    this.goTo(path);
  }

  if (isValid && !!message) {
    this.$f7.dialog.alert(message, title);
  }
}

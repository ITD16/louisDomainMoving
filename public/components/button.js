export function createButton(config = {}) {
  const {
    color = "#ffffff",
    border = "none",
    padding = "14px 24px",
    radius = "12px",
    onClick = null,
    disabled = false
  } = config;

  const button = document.createElement("button");
  button.className = "ui-btn";
  button.disabled = disabled;
  button.style.color = color;
  button.style.border = border;
  button.style.padding = padding;
  button.style.borderRadius = radius;

  if (typeof onClick === "function") {
    button.addEventListener("click", onClick);
  }

  return button;
}
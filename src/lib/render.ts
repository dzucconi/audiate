export const render = (html: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div;
};

export function renderWithTemplate(
    template,
    parentElement,
    data,
    position = "afterbegin",
    callback
  ) {
    // if clear is true we need to clear out the contents of the parent.
  
      parentElement.insertAdjacentHTML(position, template);
      if (callback) {
        callback(data);
    }
  }
  export async function loadTemplate(path) {
    let response = await fetch(path);
    response = await response.text();
    return response;
  }
export async function loadHeaderFooter() {
    let header = "../partials/header.html";
    let footer = "../partials/footer.html";
    let hTemplate = await loadTemplate(header);
    let fTemplate = await loadTemplate(footer);
    let headerEl = document.querySelector("#main-header");
    let footerEl = document.querySelector("#main-footer");
    renderWithTemplate(hTemplate, headerEl);
    renderWithTemplate(fTemplate, footerEl);
  }
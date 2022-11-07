const socket = io("http://localhost:8080");

const productForm = document.getElementById("product-form");
const productsContainer = document.getElementById("products");

const chatForm = document.getElementById("chats");
const chatContainer = document.getElementById("chatsContainer");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(productForm);
  const formValues = Object.fromEntries(formData);
  productForm.reset();
  socket.emit("new product", formValues);
});

socket.on("all products", (dato) => {
  compilerHBSProducts(dato);
});

const compilerHBSProducts = async (products) => {
  const response = await fetch("/assets/templates/product.template.hbs");
  const template = await response.text();
  // compile the template
  const compiledTemplate = Handlebars.compile(template);
  // execute the compiled template and print the output to the console
  const html = compiledTemplate({ products });
  productsContainer.innerHTML = html;
};

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(chatForm);
  const formValues = Object.fromEntries(formData);
  chatForm.reset();
  socket.emit("new message", formValues);
});

socket.on("all messages", (allMessage) => {
  compilerHBSMessages(allMessage);
});

const compilerHBSMessages = async (messages) => {
  const response = await fetch("/assets/templates/chat.template.hbs");
  const template = await response.text();
  // compile the template
  const compiledTemplate = Handlebars.compile(template);
  // execute the compiled template and print the output to the console
  console.log(messages);
  const html = compiledTemplate({ messages });
  chatContainer.innerHTML = html;
};

class ContainerMemory {
  constructor() {
    this.elements = [];
  }

  getAll() {
    return this.elements;
  }

  save(element) {
    element.id = !this.elements.length
      ? 1
      : this.elements[this.elements.length - 1].id + 1;

    this.elements.push(element);

    return element;
  }
}

export { ContainerMemory };

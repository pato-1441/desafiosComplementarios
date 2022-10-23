class ContainerMemory {
  constructor() {
    this.elements = [];
  }

  getAll() {
    return this.elements;
  }

  getById(id) {
    return this.elements.filter((element) => element.id === parseInt(id));
  }

  save(element) {
    element.id = !this.elements.length
      ? 1
      : this.elements[this.elements.length - 1].id + 1;

    this.elements.push(element);

    return element;
  }

  updateById(id, newData) {
    const elementIndex = this.elements.findIndex(
      (element) => element.id === parseInt(id)
    );

    if (elementIndex === -1) return { error: true };

    this.elements[elementIndex] = {
      ...this.elements[elementIndex],
      ...newData,
    };

    /* for (const key in newData) {
      if (this.elements[key]) {
        this.elements[key] = newData[key];
      }
    } */

    return this.elements[elementIndex];
  }

  deleteById(id) {
    const products = this.elements.filter(
      (element) => element.id !== parseInt(id)
    );
    this.elements = products;
    return { success: true };
  }
}

export { ContainerMemory };

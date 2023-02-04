export default {
  counter: 0,
  list: [],
  load() {
    this.list = ["item 1", "item 2", "item 3"].map((text, id) => ({
      id,
      text,
    }))
  },
  add(item) {
    this.counter++;
    this.list.push({ ...item, id: this.counter });
    return this.counter;
  },
  update(id, updated) {
    this.list = this.list.map((item) => {
      if (item.id === id) {
        return { ...updated, id };
      }
      return item;
    });
  },
  destroy(id) {
    this.list = this.list.filter((item) => item.id !== id);
  },
};

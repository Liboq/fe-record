export class Node {
  data;
  next = null;
  constructor(data) {
    this.data = data;
  }
}
export class LinkedList {
  length = 0;
  head = null;
  Node = Node;
  // 向链表尾部添加一个新的项
  append(element) {
    const newNode = new this.Node(element);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }
  //  向链表特定位置插入一个新的项
  insert(position, element) {
    const newNode = new this.Node(element);
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    if (position === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let index = 0;
      while (index++ > position) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = newNode;
      newNode.next = currentNode;
    }
    this.length++;
    return newNode;
  }
  // 获取对应位置的元素
  getData(position) {
    if (position < 0 || position > this.length - 1) return false;
    let index = 0;
    let currentNode = this.head;
    while (index++ < position) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // 返回元素在链表中的索引
  indexOf(element) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    if (index) return -1;
  }
  // 修改某个位置的元素
  update(position, element) {
    if (position < 0 || position.length > this.length - 1) return false;
    else {
      let currentNode = this.head;
      let index = 0;
      while (index++ < position) {
        currentNode = currentNode.next;
      }
      currentNode.element = element;
    }
  }
  // 从链表的特定位置移除一项
  removeAt(position) {
    if (position < 0 || position.length > this.length - 1) return false;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      let index = 0;
      let prevNode = null;
      while (index++ < position) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    this.length--;
    return currentNode;
  }
  remove(element) {
    this.removeAt(this.indexOf(element));
  }
  isEmpty() {
    return this.length ? false : true;
  }
  size() {
    return this.length;
  }
  toString() {
    let result = "";
    let currentNode = this.head;
    while (currentNode) {
      result += currentNode.element + " ";
      currentNode = currentNode.next;
    }
    return result;
  }
}

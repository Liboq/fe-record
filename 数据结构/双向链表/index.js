import { LinkedList, Node } from "../单向链表/index.js";

class DoubleLinkList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }
}
class DoubleNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue extends ListNode {

  
  super (value) {
    this.value = value;
    this.next = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if(!this.next){
      this.next = node;
      this.value = node;
    } 
      this.next.next = node;
      this.next = node;
  }

  dequeue() {
    const x = this.value.value;
    this.value = this.value.next;
    return x;
  }
}

module.exports = {
  Queue
};

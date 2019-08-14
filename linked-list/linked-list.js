export class LinkedList {
  constructor() {

    this.list = {
      head: null,
      tail: null
    }

  }


  createNode(prev = null, value = null, next = null) {

    return {
      prev,
      value,
      next
    }
  }

  deleteNode(node) {
    if (node != null) {
      let prevNode = node.prev
      let nextNode = node.next

      if (prevNode == null && nextNode == null) {
        this.list.head = null
        this.list.tail = null

      } else {

        if (prevNode == null) {
          this.list.head = nextNode
          nextNode.prev = null
        } else {
          if (nextNode != null) {
            nextNode.prev = prevNode
          }
        }

        if (nextNode == null) {
          this.list.tail = prevNode
          prevNode.next = null
        } else {
          if (prevNode != null) {
            prevNode.next = nextNode
          }
        }
      }
    }
    return node
  }

  findNode(value) {
    let rtnNode = null
    let nextNode = this.list.head

    while (nextNode != null) {
      if (nextNode.value === value) {
        rtnNode = nextNode
        break;
      }
      nextNode = nextNode.next
    }

    return rtnNode
  }

  push(value) {
    let newNode = this.createNode(this.list.tail, value, null)

    if (this.list.tail != null) {
      this.list.tail.next = newNode
    }

    this.list.tail = newNode

    if (newNode.prev == null) {
      this.list.head = newNode
    }

    return newNode.value
  }

  pop() {
    let lastNode = this.list.tail
    this.deleteNode(lastNode)

    return lastNode.value
  }

  shift() {
    let begNode = this.list.head
    this.deleteNode(begNode)

    return begNode.value
  }

  unshift(value) {
    let firstNode = this.createNode(null, value, this.list.head)

    if (this.list.head != null) {
      this.list.head.prev = firstNode
    }

    this.list.head = firstNode

    if (firstNode.next == null) {
      this.list.tail = firstNode
    }

    return firstNode.value
  }

  delete(value) {
    this.deleteNode(this.findNode(value))
  }

  count() {
    let nextNode = this.list.head
    let count = 0

    while (nextNode != null) {
      nextNode = nextNode.next
      count++
    }

    return count
  }
}

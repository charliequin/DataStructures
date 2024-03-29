import Node from './node.js';

export default class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    find(data) {
        let currentNode = this.head;
        let index = -1;
        while(currentNode) {
            index++;
            if(currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    addAt(index, data) {
        let node = new Node(data);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }
}
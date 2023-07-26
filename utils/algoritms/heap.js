export class Heap {
  constructor() {
    this.n = 0;
    this.arr = [];
  }

  insert(node) {
    this.n += 1;
    this.arr[this.n] = node;
    let i = this.n;
    while (i > 1) {
      const parent = Math.floor(i / 2);
      if (this.arr[parent].distance > this.arr[i].distance) {
        this.swap(this.arr, parent, i);
        i = parent;
      } else {
        return;
      }
    }
  }

  pop() {
    const tempNode = this.arr[1];
    this.arr[1] = this.arr[this.n];
    this.n = this.n - 1;
    this.arr.pop();
    let i = 1;
    while (i < this.n) {
      const left = this.arr[2 * i];
      const right = this.arr[2 * i + 1];
      if (left === undefined || right === undefined) {
        if (left === undefined && right === undefined) return tempNode;
        let smallest = left ?  2 * i : 2 * i + 1;
        if (this.arr[i].distance > this.arr[smallest].distance) {
          this.swap(this.arr, i, smallest);
          return tempNode
        } else {
          return tempNode;
        }
      }
      let smallest = left.distance < right.distance ?  2 * i : 2 * i + 1;
      if (this.arr[i].distance > this.arr[smallest].distance) {
        this.swap(this.arr, i, smallest);
        i = smallest;
      } else {
        return tempNode;
      }
    }
    return tempNode;
  }

  display() {
    console.log(this.arr.map((e) => e.distance));
  }

  isEmpty() {
    return this.n === 0 ? true : false;
  }

  swap(arr, one, two) {
    let temp = arr[one];
    arr[one] = arr[two];
    arr[two] = temp;
  }
}

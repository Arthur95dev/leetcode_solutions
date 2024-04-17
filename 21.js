var mergeTwoLists = (l1, l2) => {
    var result = {val: 0, next: null};
    var last = result;
    while (true) {
        if (!l1 && !l2) {
            return result.next;
        } else if (!l1) {
            last.next = l2;
            return result.next;
        } else if (!l2) {
            last.next = l1;
            return result.next;
        } else if (l1.val <= l2.val) {
            last.next = l1;
            l1 = l1.next;
            last = last.next;
        } else {
            last.next = l2;
            l2 = l2.next;
            last = last.next;
        }
    }
};
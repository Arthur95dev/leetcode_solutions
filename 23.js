// const head1 = {val: 1, next: {val: 4, next: {val: 5, next: null}}};
// const head2 = {val: 1, next: {val: 3, next: {val: 4, next: null}}};
// const head3 = {val: 2, next: {val: 6, next: null}};
// const lists = [head1, head2, head3];
//Bad solution
var mergeKLists = (lists) => {
    var result = {val: 0, next: null};
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    var current = result;

    while (lists.length) {
        lists = lists.filter(el => el !== null);
        if (!lists.length) return result.next;
        lists.sort((a, b) => a.val - b.val);
        current.next = lists[0];
        current = current.next;
        lists[0] = lists[0].next;
    }
    return result.next;
};
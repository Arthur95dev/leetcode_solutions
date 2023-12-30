var isPathCrossing = (path) => {
    var point = [0, 0];
    var set = new Set();
    set.add(point.join());

    for (var i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N': {
                if (path[i - 1] === 'S') return true;
                point[1] = point[1] + 1;
                let newPoint = point.join();
                if (set.has(newPoint)) return true;
                set.add(newPoint);
                break;
            }
            case 'S': {
                if (path[i - 1] === 'N') return true;
                point[1] = point[1] - 1;
                let newPoint = point.join();
                if (set.has(newPoint)) return true;
                set.add(newPoint);
                break;
            }
            case 'E': {
                if (path[i - 1] === 'W') return true;
                point[0] = point[0] + 1;
                let newPoint = point.join();
                if (set.has(newPoint)) return true;
                set.add(newPoint);
                break;
            }
            case 'W': {
                if (path[i - 1] === 'E') return true;
                point[0] = point[0] - 1;
                let newPoint = point.join();
                if (set.has(newPoint)) return true;
                set.add(newPoint);
                break;
            }
        }
    }
    return false;
};

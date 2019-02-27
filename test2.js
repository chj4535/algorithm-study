/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
    if (points.length <= 0) return 0

    points.sort((a, b) => a[1] < b[1] ? -1 : 1)

    let arrowCount = 1
    let curEnd = points[0][1]
    console.log(points);
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= curEnd) continue
        else {
            arrowCount += 1
            curEnd = points[i][1]
        }
    }

    return arrowCount
}

findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]);

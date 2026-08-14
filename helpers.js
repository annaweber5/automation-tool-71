function calculateDistance(pointA: { x: number; y: number }, pointB: { x: number; y: number }): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function findClosestPoint(points: Array<{ x: number; y: number }>, target: { x: number; y: number }): { x: number; y: number } {
    return points.reduce((closest, point) => {
        const distanceToClosest = calculateDistance(closest, target);
        const distanceToCurrent = calculateDistance(point, target);
        return distanceToCurrent < distanceToClosest ? point : closest;
    });
}

function isPointInCircle(point: { x: number; y: number }, circle: { center: { x: number; y: number }; radius: number }): boolean {
    const distance = calculateDistance(point, circle.center);
    return distance <= circle.radius;
}

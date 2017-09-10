
function smootherStep(min, max, x) {
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10)
}

export default function bounce(from, to, time, duration) {
    duration = duration || 1
    if(time <= 0) return from
    if(time >= duration) return from
    return time < duration / 2 ? (smootherStep(from, to, time / (duration / 2))) :
        (smootherStep(to, from, (time - (duration/2)) / (duration/2)))
}

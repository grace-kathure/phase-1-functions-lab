// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(x){
    return Math.abs((x - hq))
}
distanceFromHqInBlocks(x)


function distanceFromHqInFeet(x){
    return Math.abs(x - hq) * 264
}
distanceFromHqInFeet(x)

function distanceTravelledInFeet(y, z){
    return Math.abs(y - z) * 264
}
distanceTravelledInFeet(y, z)

function calculatesFarePrice(num1, num2){
    let distance = Math.abs(num1 - num2) * 264;
    if(distance < 400){
        return  0
    } else if( distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else if(distance > 2500){
        return "cannot travel that far"
    }
}
calculatesFarePrice(num1, num2)


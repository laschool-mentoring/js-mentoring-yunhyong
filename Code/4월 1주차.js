// for 1 ~ 1000까지 

let sum = 0;
for(let i = 0; i < 1001; i++) {
    sum = sum + i; // sum += i;
}
console.log(sum);


// function
// 더하기 (5) 1~5까지
function add(x) {
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(sum);
}

add(5);
add(7);

// x = 3, 3단 5 5단
function GGD(x) {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            console.log(i + " X " + j +  " = " + i*j);
        }
    }
}


// 화살표 함수
const GGD = (x) => {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            console.log(i + " X " + j +  " = " + i*j);
        }
    }
}

GGD(12);
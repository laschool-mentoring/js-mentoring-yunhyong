// 1. 아니다. 출력해보자

// 2. 상수 name : "최윤형" 상수 age : 17 -> 최윤형 멘티는 17세이다.

// 3. 배열 fruit -> 사과, 배, 귤    귤 출력

const fruit = ["사과", "배", "귤"];
console.log(fruit[2]);

// 4. 반복문 for 

// 출력 1 -> 3번

// 구구단 9단 만들기 ex) 1 X 1 = 1, 1 X 2 = 2 ...

// break -> 3단 출력 -> 브레이크  

for (let i = 1; i < 10; i++) {ㄴ
    // i = 2
    for (let j = 1; j < 10; j++) {
        // i = 3, j = 1 ~ 9
        console.log(i + " X " + j + " = " + i*j);
        if (i == 3) break;
    }
    if (i == 3) break;
}

// while

// 
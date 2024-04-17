
//함수 선언식
function ex1(a:number, b :number):number{
    return a+b
}

// 함수 호출
// let result = ex1(3, 3); // a에 3, b에 3을 전달하여 함수 호출
// console.log(result); // 결과 출력: 6

//함수 표현식
const ex2 = function( a:number, b:number):number{
    return a+ b;
}

//화살표 함수
const ex3 = (a:number, b:number) => {
    return a+b
}

//선언후 할당
type Problem = (msg:number)=> void;
const showProblem:Problem = (msg) => {
    alert(msg);
}

//////////////////////////////////////////////////////////////////////////////

//심볼타입   #주로 객체에서쓰인다
let sum = Symbol();
let sum1 = Symbol('hello');
let sum2 = Symbol('hello');

console.log(sum1 === sum2);


function f1(a: unknown){
    if(typeof a === 'string'){
   return a.toUpperCase();
}else{
    return '문자열이 아니야'
}
}


/////////////////////////////////////////////////////////////////
const sumsum = (a:number, b:number) => {  ///이 줄에서 a, b는 매개변수
    return a+b  
}
    sumsum(3,5) // 이줄에서 3,5는 인자

//매개변수 == parameter  인자라고 생각하면대고
//인자 == argument  실제로 존재하고 할당되어진 값이라고 생각한다
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
const func = (name:string, job?:string) => {
    console.log(name + ` ` + job);
}
func('김제희')

//선택적 매개변수 Optional Parameter job?:string

//기본 매개변수 Default Parameter job ='학생'
/////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
const func2 = (first:number, second:number, ...rest:number[]) =>{
    console.log('1', first);
    console.log('2' ,second);
    console.log('3',rest)

}
func2(1,2);

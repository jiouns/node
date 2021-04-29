// 阻塞与非阻塞
// 阻塞：Java Ruby PHP Asp .Net
// 非阻塞：node.js

// 阻塞
function updatedb1(){
    var start =new Date().getTime();
    while (new Date().getTime() < start + 3000);
}
// updatedb1();
// console.log("updatedb1 success.");
// console.log("I like Node.js!");

//非阻塞
function updatedb2(node){
    setTimeout(() => {
        node(); //回调

    },1000);
}
updatedb2(() => {
    console.log("updaedb2 success");
});
console.log("I like Node.js --")
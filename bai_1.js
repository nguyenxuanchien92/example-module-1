function result(a, b) {
    if (a !== 0) {
        console.log(`Phương trình bậc nhất một ẩn có nghiệm x = ${-b / a}`);
    } else {
        if (b === 0) {
            console.log(`Phương trình bậc nhất một ẩn có vô số nghiệm`);
        } else {
            console.log(`Phương trình bậc nhất một ẩn  vô nghiệm`);
        }
    }
}

result(5,8);
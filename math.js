function myMathMax(a, b, c) {
    max_num = 0;
    if (a > b) {
        max_num = a;
    } else {
        max_num = b;
    }
    if (c > max_num) {
        max_num = c;
    } 
    return max_num;
}
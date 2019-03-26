
var FreqStack = function() {
    this.stack = Array.from({length:10001}, x=>[]);
    this.top = 0;
    this.f={};
    //console.log(this.stack);
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(!this.f[x]) this.f[x]=0
    this.f[x]+=1;
    //console.log(this.f);
    if(this.top<this.f[x]) this.top=this.f[x];
    this.stack[this.f[x]].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    res = this.stack[this.top].pop();
    this.f[res]-=1;
    if(this.stack[this.top].length==0) this.top--;
    return res;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

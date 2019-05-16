window.onload = function(){
  var li = document.getElementsByClassName('list');
  var arr = [];
  for(var i=0;i<li.length;i++){
    li[i].onclick = function(){
      arr = new mySibling(this).siblings().arr;
      for(var i=0;i<arr.length;i++){
        arr[i].style.width = 86 + 'px';
      }
      this.style.width = 866 + 'px';
    }
  }  
}
class mySibling{
  constructor(selector){
    this.arr = [];
    this.selector = selector.parentElement.children;//这里当前父元素下所有子元素
  }
  siblings(){
    for(var i=0;i<this.selector.length;i++){
      if(this.selector[i].nodeType == 1 && this.selector[i] != this.selector){//当其中任意一个子元素与当前子元素不匹配
        this.arr.push(this.selector[i]);
      }
    }
    return this;
  }
}
//这是 jq 中的 siblings 
// function siblings(a, b) { 
//   var c = [];
//   for (; a; a = a.nextSibling)
//     a.nodeType === 1 && a !== b && c.push(a); 
//     return c 
// }
// function siblings (a) { 
//   return f.sibling((a.parentNode || {}).firstChild, a) 
// } 
// function children(a) { return f.sibling(a.firstChild) }
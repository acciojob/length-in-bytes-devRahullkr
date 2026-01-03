const byteSize = (str) => {
  // write your code here
return new TextEncoder().encode(str).length;
	
};

// Do not change the code below
const str = prompt("hello world");
alert(byteSize(str));

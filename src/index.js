module.exports = function reverse (n) {
  let a=n.toString();
  let b=a.split("");
  let c=b.reverse();
  let d=c.join("");
  console.log(d);
  return parseInt(d)
}

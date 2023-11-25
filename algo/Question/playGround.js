function revStr(str) {
  str = [...str];
  for (let i = 0; i < Math.round(str.length / 2); i++) {
    [str[i], str[str.length - i - 1]] = [str[str.length - i - 1], str[i]];
  }

  return str.join("");
}

console.log(revStr("hello"));

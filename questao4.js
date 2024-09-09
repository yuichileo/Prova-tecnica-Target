function mensal(){

const sp = Number(67836.43);
const rj = Number(36678.66);
const mg = Number(29229.88);
const es = Number(27165.48);
const outro = Number(19849.53);

const total = (sp + rj + mg + es + outro);

console.log(`A porcentagem de SP é de: ${((sp/total)*100).toFixed(2)}%`);
console.log(`A porcentagem de RJ é de: ${((rj/total)*100).toFixed(2)}%`);
console.log(`A porcentagem de MG é de: ${((mg/total)*100).toFixed(2)}%`);
console.log(`A porcentagem de ES é de: ${((es/total)*100).toFixed(2)}%`);
console.log(`A porcentagem dos outros estados é de: ${((outro/total)*100).toFixed(2)}%`);
}
mensal();
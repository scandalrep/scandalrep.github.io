function vosvvstep(a, n) {
  power_res = 1;
  for (let step = 0; step < n; step++) {
    power_res *= a;
  }
  return power_res;
}
console.log(vosvvstep(2, 10));

module.exports = function(n) {
  let k = Math.ceil((Math.sqrt(n) - 1) / 2);
  let t = 2 * k + 1
  let m = Math.pow(t, 2);
  t = t - 1
  if (n >= m - t) {
    return { x: k - (m - n), y: -k };
  } else  {
    m = m - t;
  }

  if (n >= m - t) {
    return { x: -k, y: -k + (m - n) };
  } else  {
    m = m - t;
  }

  if (n >= m - t) {
    return { x: -k + (m - n), y: k };
  } else  {
    return { x: k, y: k - (m - n - t) };
  }
}
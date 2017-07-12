var button = document.getElementById('Upvote!'),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Upvote!: " + count;
};

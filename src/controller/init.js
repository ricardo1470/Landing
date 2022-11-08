const getinit = (req, res) => {
  res.render('index.html', { title: '@Ricardo1470', message: 'Welcome to my portfolio' });
  console.log('Welcome to my portfolio');
}

module.exports = {
  getinit,
}

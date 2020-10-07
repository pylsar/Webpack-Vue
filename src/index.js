// главный файл приложения
import Post from './Post.js';
import './styles/styles.css';
import Logo from './assets/logo.jpg';
import json from './assets/db.json';

const post = new Post('webpack Post title', Logo);
console.log(post.toString());
console.log('JSON:', json);
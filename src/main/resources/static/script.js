// Создан объект каласса Пользователя,
const User = {
    id: 1,
    email: 'mike@gmail.com',
    username: "mike",
    login: "Mike1",
    autorized: true
};

// Создан объект класса Постов. я решила связать user  и  post просто указав ссылку на сам объект, путем его объявления.
// Так как он будет в будущем ссылатся именно на данного пользователя.
const Post = {
    id: 1,
    author: User,
    image: 'horror.jpg',
    description: 'Hello',
    date: "2022-05-04"
};

//Создан объект Класса коментарий. Он также будет ссылатся единственного пользователя.
const Comment = {
    id: 1,
    author: User,
    post: Post,
    commentText: 'Good foto)',
    date: "2022-05-05"
};

// Массив постов
let postArray = [
    {id: 1, author: User, image: 'summer.jpg', description: 'So sunny'},
    {id: 2, author: User, image: 'winter.jpg', description: 'So cold'},
    {id: 3, author: User, image: 'autumn.jpg', description: 'So wildly'},
    {id: 4, author: User, image: 'spring.jpg', description: 'So green'},];

// Добавление новых постов в массив постов
function addPosts(post) {
    let newPost = postArray.push(post)
}

let newPostadd = {id: 12, author: User, image: 'cat.kg', description: 'hello'};
addPosts(newPostadd);

// функция сменяющий статус объекта User с неавторизованного на авторизованный и обратно.
function changeAutorizedStatus(user) {
    user.autorized = user.autorized !== true;
};

changeAutorizedStatus(User);

//lesson 58
function createCommentElement(Comment) {
    // const elem = document.getElementsByClassName("comment");
    const element = document.createElement("div");
    element.className = "comment";
    // const com = elem.innerHTML;
    element.innerHTML = `<div class="text">comment: ${Comment.commentText}</div>
<div>Date: ${Comment.date}</div>
<div class="user">Author: ${Comment.author.login}, email: ${Comment.author.email}, name: ${Comment.author.username}</div>`;
    return element;
}


function createPostElement(Post) {
    const element = document.createElement("div");
    element.className = "post"
    element.innerHTML = `<div class="image">Image: ${Post.image}</div>
<div class="description">Description: ${Post.description}</div>
<div>Date: ${Post.date}</div>
<div class="user">Author: ${Post.author.login}, email: ${Post.author.email}, name: ${Post.author.username}</div>`;
    return element;
}

let commentsNode = document.querySelector('.comments');
console.log(commentsNode)
commentsNode.append(createCommentElement(Comment));


function addPost(Post) {
    let postsNode = document.querySelector('.posts');
    console.log(postsNode)
    postsNode.append(Post);
}


let post = createPostElement(Post); // element
addPost(post);


function showSplashScreen(){
const element = document.querySelector(".posts");
element.innerHTML;
element.hidden=true;}

function hideSplashScreen(){
    const element = document.querySelector(".posts");
    element.innerHTML;
    element.hidden=false;
}

showSplashScreen(post);
hideSplashScreen(post);
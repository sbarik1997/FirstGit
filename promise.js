const posts = [];

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                posts.push(post);
                resolve(post);
        },1000);
    })
};

const user = {
    name: "supriya barik",
    lastActivity: new Date().getTime()
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.lastActivity = new Date().getTime();
            resolve(user.lastActivity);
        },1000);
    })
};

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                const poppedElement = posts.pop();
                resolve(poppedElement);
            }else{
                reject("ERROR");
            }
        })
    })
};

function userUpdatePost(){
    Promise.all([createPost({title: "post1",body: "This is post 1"}),updateLastUserActivityTime()]).then(([createPostResolve,updateLastUserActivityTimeResolve]) => {
        console.log(createPostResolve.title);
        console.log(updateLastUserActivityTimeResolve);
    }).then(() => {
        deletePost().then((msg) => {
            console.log(msg);
            Promise.all([createPost({title:"post2",body: "This is post 2"}),updateLastUserActivityTime()])
            .then(([createPostRes,updateLastUserActivityTimeRes]) => {
                console.log(createPostRes.title);
                console.log(updateLastUserActivityTimeRes);
            })
        })
    })
};

userUpdatePost();
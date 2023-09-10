
const posts = [{ title:"post1", body:"This is post1" },
               { title:"post2", body:"This is post2" }]

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           posts.push(post);
           resolve(post);
        },2000);
    })
}

function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const poppedElement = posts.pop();
        if(posts.length > 0){
            resolve(poppedElement);
        }else{
            reject("Error: Something went wrong");
        }
        },1000)
    })
}

const user = {
    userName: "A Das",
    lastActivity: new Date().getTime()
}

// console.log(user.lastActivity);

function updateLastUserActivityTime() {
    return new Promise((resolve,reject) => {
        user.lastActivity = new Date().getTime();
        resolve(user.lastActivity);
    })
}


const userActivity = Promise.all([createPost({title: "post3", body: "This is post3"}),updateLastUserActivityTime()]);

userActivity
.then(([createPostRes,updateLastUserActivityTimeRes]) => {
    console.log(createPostRes.title);
    console.log(updateLastUserActivityTimeRes);
})
.then(() => {
    deletePost()
    .then((msg) => {
        console.log(msg);
        return Promise.all([createPost({title: "post4", body: "This is post4"}),updateLastUserActivityTime()])
    })
    .then(([createPostRes2,updateLastUserActivityTimeRes2]) => {
        console.log(createPostRes2.title);
        console.log(updateLastUserActivityTimeRes2);
    })
})
.catch((err) => console.log(err))


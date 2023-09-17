// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//     setTimeout(() => {
//        resolve('ticket');
//     },3000);
// });

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log("wife: i have tickets");
//     console.log("husband: we should go in");
//     console.log("wife: no i am hungry");

//     return new Promise((resolve,reject) => resolve(`${t} popcorn`))
// });

// const getButter = getPopcorn.then((t) => {
//     console.log("husband: I got some popcorn");
//     console.log("husband: we should go in");
//     console.log("wife: I need butter on popcorn");

//     return new Promise((resolve,reject) => resolve(`${t} butter`))
// });

// const getColdDrink = getButter.then((t) => {
//     console.log("husband: I put butter on popcorn");
//     console.log("wife: can you bring coldDrink for me?");

//     return new Promise((resolve,reject) => resolve(`${t} cocaCola`))
// });

// getColdDrink.then((t) => {
//     console.log("husband: I got a cocaCola. let's go");
//     console.log(t)})

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");



// console.log("person1: shows ticket");
// console.log("person2: shows ticket");



// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('ticket'),3000);
//     });

//     const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

//     const addButter = new Promise((resolve,reject) => resolve(`butter`));

//     const getcoldDrink = new Promise((resolve,reject) => resolve(`cocaCola`))

//     let ticket = await promiseWifeBringingTicks;

//     console.log(`wife: i have ${ticket}`);
//     console.log("husband: we should go in");
//     console.log("wife: no i am hungry");

//     let popcorn = await getPopcorn;

//     console.log(`husband: I got some ${popcorn}`);
//     console.log("husband: we should go in");
//     console.log("wife: I need butter on popcorn");

//     let butter = await addButter;

//     console.log(`husband: I got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling?`);
//     console.log(`wife: can you bring one coldDrink for us?`);
//     console.log(`husband: as your wish`);
    
//     let coldDrink = await getcoldDrink;
    
//     console.log(`husband: I got a ${coldDrink}`);
//     console.log(`wife: lets go we are getting late`);
//     console.log(`husband: thanks for the reminder *grins*`);

//     return ticket;
// };

// preMovie().then((m) => console.log(`person3: shows ${m}`));



// console.log("person4: shows ticket");
// console.log("person5: shows ticket");


const posts = [{ title: "post1", body:"This is post1" },
               { title: "post2", body:"This is post2" }]

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
        setTimeout(() => {
            user.lastActivity = new Date().getTime();
            resolve(user.lastActivity);
        },1000);
    })
}



const userActivity = async () => {
    try {
    const [createPostRes,updateLastUserActivityTimeRes] = await Promise.all([createPost({title: "post3", body: "This is post3"}),updateLastUserActivityTime()]);
    
    console.log("create new post: ", createPostRes.title);
    console.log("user updated time: ", updateLastUserActivityTimeRes);

    const postDelete = await deletePost();

    console.log("deleted post: ", postDelete);
    
    const [createPostRes2,updateLastUserActivityTimeRes2] = await Promise.all([createPost({title: "post4", body: "This is post4"}),updateLastUserActivityTime()]);
    
    console.log("create new post: ", createPostRes2.title);
    console.log("user updated time: ", updateLastUserActivityTimeRes2);
    } catch (error) {
        console.log(error);
    }
}    
    
console.log(user.lastActivity);

userActivity();


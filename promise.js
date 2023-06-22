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
        },2000)
    })
};

async function userUpdatePost(){
    return await Promise.all([createPost({title: "post1",body: "This is post 1"}),updateLastUserActivityTime()])
};

userUpdatePost().then(([createPostRes,updateLastUserActivityTimeRes]) => {
    console.log(createPostRes.title);
    console.log(updateLastUserActivityTimeRes);
})
.then(() => {
    deletePost().then(async (msg) => {
        console.log(msg);
        return await Promise.all([createPost({title: "post2",body: "This is post 2"}),updateLastUserActivityTime()])
    })
    .then(([createPostResolve,updateLastUserActivityTimeResolve]) => {
        console.log(createPostResolve.title);
        console.log(updateLastUserActivityTimeResolve);
    })
})



console.log('person1: shows tickets');
console.log('person2: shows tickets');

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('tickets');
    },3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i have tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`))
})

const getColdDrinks = getButter.then((t) => {
    console.log('husband: i got some butter on popcorn');
    console.log('husband: anything else do you want?');
    console.log('wife: yes i need a 7 up');
    return new Promise((resolve,reject) => resolve(`${t} 7up`))
})

getColdDrinks.then((t) => console.log(t))

console.log('person4: shows tickets');
console.log('person5: shows tickets');


console.log('person1: shows tickets');
console.log('person2: shows tickets');


const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('tickets');
            },3000);
        });

    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn')); 

    const getButter = new Promise((resolve,reject) => resolve('butter')); 

    const getColdDrinks = new Promise((resolve,reject) => resolve('7up'))
    
    

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else do you want?');
    console.log('wife: yes i need a 7 up');

    let coldDrinks = await getColdDrinks;

    console.log(`husband: i bought a ${coldDrinks}`);
    console.log('wife: lets go for the movie');

    return ticket;    
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log('person4: shows tickets');
console.log('person5: shows tickets');

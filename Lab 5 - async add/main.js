const measureTime = async (func, ...args) => {
    console.time("executionTime");
  
    try {
      await func(...args);
    } catch (error) {
      console.error(error);
    }
  
    console.timeEnd("executionTime");
  };

const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
  }

const add = async (...args) => {
    let sum = args[0]
    for (let i = 1; i < args.length; i++) {
        (async () => {
            try {
              const result = await asyncAdd(sum, args[i])
              console.log(result)
            } catch (error) {
              console.error(error)
            }
          })();
    }
}

(async () => {
    measureTime(add, 1, 2, 3, 4, 5, 6)
  })();
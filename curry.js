//Curry Function
function curry(callback) {
    const curriedCB = (...args)=>{
        if (args.length===0) {
            return callback();
        }
        return (...otherArgs)=>{
            if (otherArgs.length===0) {
                return callback(...args);
            }

            return curriedCB(...args,...otherArgs);
        }
    };

    return curriedCB;
}
  
exports.curry = curry;
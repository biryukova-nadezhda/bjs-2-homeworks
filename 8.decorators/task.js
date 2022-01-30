function cachingDecoratorNew(func) {
    let cache = [];

    return function(...rest) {
        let hash = rest.toString();

        let ind = cache.findIndex(item => item.hash === hash)

        if (cache.length > 5) {
            cache.shift();
        }

        if (ind === -1) {
            let result = func(...rest);

            cache.push({
                hash: hash,
                result: result
            })

            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result
        } else {
            console.log("Из кэша: " + cache[ind].result);
            return "Из кэша: " + cache[ind].result;
        }


    }
}


function debounceDecoratorNew(func) {
    let timer;
    return function(...rest) {
        if (!timer) {
            func(...rest);
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...rest);
        }, ms)
    }
}

function debounceDecorator2(func) {
    let timer;
    let count = 0;

    function wrapper(...rest) {
        if (!timer) {
            func(...rest);
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...rest);
            count++;
            wrapper.counter.shift();
            wrapper.counter.push(count);
        }, ms)
    }

    wrapper.counter = [];
    wrapper.getCounter = () => {
        console.log(wrapper.counter);
    }
    return wrapper
}
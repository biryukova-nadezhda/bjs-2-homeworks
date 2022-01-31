function cachingDecoratorNew(func) {
    let cache = [];

    return function(...rest) {
        let hash = rest.toString();

        let ind = cache.findIndex(item => item.hash === hash)

        if (cache.length >= 5) {
            cache.shift();
        }

        if (ind != -1) {
            console.log("Из кэша: " + cache[ind].result);
            return "Из кэша: " + cache[ind].result;
        }


        let result = func(...rest);

        cache.push({
            hash: hash,
            result: result
        })
        console.log(cache)
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result
    }
}


function debounceDecoratorNew(func, ms) {
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

function debounceDecorator2(func, ms) {
    let timer;
    wrapper.count = 0;

    function wrapper(...rest) {
        if (!timer) {
            func(...rest);
            wrapper.count++;
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...rest);
            wrapper.count++;
        }, ms)
    }
    return wrapper
}
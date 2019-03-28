var mix = {
    goodName: 'Good property naming',
    "++++++++": "bad name, but still works",
    "true": "keyword used as property name",
    '*^%$^*)(*': "invalid characters used as property name"
};


function printValue(propName) {
    return this[propName];
}

/// merge

const o1 = { one: 1 }
const o2 = { two: 1 }
const o3 = { three: 1 }

const o4 = Object.assign({}, o1, o2, o3);

o4.three = 200;
o4.nest1.four = 600;
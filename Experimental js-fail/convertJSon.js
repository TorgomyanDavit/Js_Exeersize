// var splitedChannel = []
// var obj = {}
// var result = channel.split(/m3u8(?=\n)/)
// for(var i = 0;i < result.length;i++) {if(result[i].search("m3u8") === -1){result[i] += "m3u8"}}

// for(var i2 = 0;i2 < result.length;i2++) {
//     if(result[i2].search("http") !== -1) { splitedChannel[i2] = result[i2].split(/(?=\n)/)}
// }

// for(var i3 = 0;i3 < splitedChannel.length;i3++) {
//     obj = {};
//     obj.name = splitedChannel[i3][0].substring(splitedChannel[i3][0].lastIndexOf(",")+1,splitedChannel[i3][0].length);
//     obj.type = splitedChannel[i3][1].substring(splitedChannel[i3][1].lastIndexOf(":")+1,splitedChannel[i3][1].length);
//     obj.url = splitedChannel[i3][2].substring(1,splitedChannel[i3][2].length);
//     splitedChannel[i3] = obj
// };

// console.log(splitedChannel);
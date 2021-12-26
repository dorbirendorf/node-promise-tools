//import log from "@ajar/marker";
// log.blue("------------------------------------->");
// // --------------------------------------------------
// const promise1 = P.echo("1 first resolved value", 3000);
// const promise2 = P.echo("2 second resolved value", 3000);
// const promise3 = P.echo("3 third resolved value", 3000);
// const run = async () => console.log(await P.all([
//     promise1,
//     promise2,
//     promise3
//  ]));
// const run = async () => console.log(await P.props({ promise1, promise2, promise3 }));
// run();
// (async ()=> {
//     console.log(await P.all([ promise1, promise2, promise3 ]));
//     console.log(await P.props({ promise1, promise2, promise3 }));
// })();
// //--------------------------------------------------
// const run = async () =>
//     console.log(
//         await P.all([
//             P.echo("1 first resolved value", 3000),
//             P.echo("2 second resolved value", 3000),
//             P.echo("3 third resolved value", 3000),
//         ])
//     );
// run();
// //--------------------------------------------------
//(async () => {
// const promise1 = P.echo("1 first resolved value", 3000);
// const promise2 = P.echo("2 second resolved value", 3000);
// const promise3 = P.echo("3 third resolved value", 3000);
// /**   P.all()  **/
// console.log(await P.all([promise1, promise2, promise3]));
// const echoB = async (msg:string, ms:number) => {
//     // try{
//     await P.delay(ms);
//     throw new Error("echoB failed!!!");
//     return msg;
//     // }catch(err){
//     //     //console.log(err.message);
//     //     throw err;
//     // }
// };
// P.all([promise1, echoB("yo", 3500), promise3])
//     .then((values) => console.log("success ->", values))
//     .catch((err) => log.red(err.message));
// try {
//     const resolved = await P.all([promise1, echoB("yo", 3500), promise3]);
//     console.log(resolved);
// } catch (err) {
//     log.blue("error");
// }
// /**   P.props()  **/
// console.log(await P.props({ promise1, promise2, promise3 }));
// /**   P.each()  **/
// log.yellow(
//     await P.each([..."Geronimo"], async (char) => {
//         log.cyan(`${char} -->`);
//         await P.delay(P.random(2000, 500));
//         log.magenta(`<-- ${char}`);
//         return (char as string).toUpperCase(); // No effect...
//     })
// );
// /**   P.mapParallel()  **/
// log.yellow(
//     await P.mapParallel([..."Geronimo"], async (char) => {
//         log.cyan(`${char} -->`);
//         await P.delay(P.random(2000, 500));
//         log.magenta(`<-- ${char}`);
//         return (char as string).toUpperCase(); // Modify each item in the iterable
//     })
// );
/* const promise1 = P.echo("1 first", 1000);
    const promise2 = P.echo("2 second", 100);
    const promise3 = P.echo("3 third", 2000);
    log.yellow(
        await P.mapParallel([promise1, promise2, promise3] , async p => {
            let char = await p;
            log.cyan(`${char} <--`);
            await P.delay( P.random(2000,500) );
            log.magenta(`<-- ${char}`);
            return char.toUpperCase(); // Modify each item in the iterable
        }) 
    ) */
// /**   P.mapSeries()  **/
// log.yellow(
//     await P.mapSeries([..."Geronimo"], async (char) => {
//         log.cyan(`${char} -->`);
//         await P.delay(P.random(2000, 500));
//         log.magenta(`<-- ${char}`);
//         return (char as string).toUpperCase(); // Modify each item in the iterable
//     })
// );
// /**   P.filterParallel()  **/
// log.yellow(
//     // filter only alphabetic characters
//     await P.filterParallel([..."G<4!e3ro0ni1mo"], async (char) => {
//         log.cyan(`${char} -->`);
//         await P.delay(P.random(2000, 500));
//         log.magenta(`<-- ${char}`);
//         return /^[A-Za-z]+$/.test((char as string)); // test for alphabetic characters
//     })
// );
// /**   P.filterSeries()  **/
// log.yellow(
//     // filter only alphabetic characters
//     await P.filterSeries([..."G<4!e3ro0ni1mo"], async (char) => {
//         log.cyan(`${char} -->`);
//         await P.delay(P.random(1000, 100));
//         log.magenta(`<-- ${char}`);
//         return /^[A-Za-z]+$/.test((char as string)); // test for alphabetic characters
//     })
// );
// /**   P.reduce()  **/
// log.yellow(
//     // filter only alphabetic characters
//     await P.reduce(
//         [51, 64, 25, 12, 93],
//         async (total, num) => {
//             log.cyan(`${num} -->`);
//             await P.delay(P.random(1000, 100));
//             log.magenta(`<-- ${num}`);
//             return (total as number) + (num as number);
//         },
//         0
//     )
// );
// /**   P.race()  **/
// log.yellow(
//     // filter only alphabetic characters
//     await P.race([
//         P.echo("first", 4000),
//         P.echo("second", 1000),
//         P.echo("third", 3000),
//     ])
// );
// /**   P.some()  **/
// log.yellow(
//     // filter only alphabetic characters
//     await P.some(
//         [
//             P.echo("first", 4000),
//             P.echo("second", 400),
//             P.echo("third", 3000),
//             P.echo("forth", 3000),
//             P.echo("fifth", 500),
//         ],
//         2
//     )
// );
//})();

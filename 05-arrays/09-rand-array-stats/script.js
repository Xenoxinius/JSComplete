/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let randoms = [...Array(10)].map(() => Math.floor(Math.random() * 100));

        console.log(randoms);
        for (let i = 0; i < randoms.length; i++) {
            document.getElementById("n-" +i).innerHTML = randoms[i];

        }

    })
})();

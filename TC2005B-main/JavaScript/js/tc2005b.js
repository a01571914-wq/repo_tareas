/*
 * Example functions to practice JavaScript
 *
 * Gilberto Echeverria
 * 2025-02-12
 */

"use strict";
function firstNonRepeating (str) {
const candidates = [];
    //recorrer caracter por caracter
    for (let i = 0; i < str.length; i++) {
        //si el caracter no esta en los candidatos, lo agregamos
        let found = false;
        for ( let cand of candidates) {
            
            if (cand.char == str[i]) {
                cand.count +=1;
                found = true;
                
            }
        }
        if (!found) {
            candidates.push({char: str[i], count: 1});
        }
 }
 console.log(candidates);
 for (let index in candidates){
        if (candidates[index].count === 1) {
            return candidates[index].char;
        }
 }
}





export {
    firstNonRepeating,
    
    //bubbleSort,
    //invertArray,
    //invertArrayInplace,
    //capitalize,
    //mcd,
    //hackerSpeak,
    //factorize,
    //deduplicate,
    //findShortestString,
    //isPalindrome,
   // sortStrings,
    //stats,
    //popularString,
    //isPowerOf2,
   //sortDescending,//
    
};

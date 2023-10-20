import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays"
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunction"
import JsonStringify from "./JsonStringify"
import FindFunction from "./FindFunction"
import FindIndex from "./FindIndex"
import FindFilter from "./FindFilter"

function WorkingWithArrays(){
    var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
]


return (
<div><h3>Arrays </h3>
numberArray1 = {numberArray1},<br></br>
stringArray1 = {stringArray1},<br></br> 
variableArray1 = {variableArray1}

<ArrayIndexAndLength/>
<AddingAndRemovingDataToFromArrays/>
<ForLoops/>
<MapFunction/>
<JsonStringify/>
<FindFunction/>
<FindIndex/>
<FindFilter/>



</div>
);
}

export default WorkingWithArrays
import React from "react";
import friends from '../images/Friends.jpg';
import love from '../images/Love.jpg';
import affection from '../images/Affection.jpg';
import marriage from '../images/Marriage.jpg';
//import enemy from '../images/Enemy.jpg';
import siblings from '../images/Siblings.jpg';
function Result(props){
    let data = {
        person1 : "",
        person2 : ""
      }
    const handleEvent = () => {
    props.dataFromChild(data);
    }
    let t1 = props.person1.split("");
    let t2 = props.person2.split("");
    for(let ind1 = 0;ind1<t1.length;ind1++)
    {
        let ind2 = t2.indexOf(t1[ind1]);
        if(ind2>-1)
        {
            t1.splice(ind1,1);
            t2.splice(ind2,1);
            ind1--;
        }
    }
    let count = t1.length+t2.length;
    console.log("count = ",count);
    let list = ['F','L','A','M','E','S'];
    let l = 7,ind=7;
    while(list.length>1)
    {
        ind = ( count + ind - 1 ) % (l-1);
        l--;
        if(ind === 0){
        ind = list.length;
        list.splice(list.length-1,1);
        }
        else
        list.splice(ind-1,1);
    }
    console.log(list);
    return(
        <div className="d-block mx-auto p-4 bg-white bg-opacity-10">
            <div className="relation ">
                {list[0] === 'F' &&
                    <div>
                        <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up as </h2>
                        <img src = {friends} style={{width : '200px' , height : '150px'}} alt ="Friends"/>
                    </div>
                }
                {list[0] === 'L' &&
                    <div>
                    <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up in </h2>
                    <img src = {love} style={{width : '200px' , height : '150px'}} alt ="Love"/>
                    </div>
                }
                {list[0] === 'A' &&
                    <div>
                    <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up in</h2>
                    <img src = {affection} style={{width : '200px' , height : '150px'}} alt ="Affection"/>
                    </div>
                }
                {list[0] === 'M' &&
                    <div>
                    <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up in </h2>
                    <img src = {marriage} style={{width : '200px' , height : '150px'}} alt ="Marriage"/>
                    </div>
                }
                {list[0] === 'E' &&
                    <div>
                    <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up as  ENEMIES </h2>
                    {/*<img src = {enemy} style={{width : '200px' , height : '150px'}} alt ="enemies"/>*/}
                    </div>
                }
                {list[0] === 'S' &&
                    <div>
                    <h2 style={{color : "#9edba2"}}>{props.person1} & {props.person2} will end up as </h2>
                    <img src = {siblings} style={{width : '200px' , height : '150px'}} alt ="Siblings"/>
                    </div>
                }
            </div>
           <button className="btn btn-primary m-2" onClick={handleEvent}>Try again</button>
        </div>
    )
}
export default Result;
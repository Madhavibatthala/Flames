import React from "react";
import {useForm} from 'react-hook-form';
function Entry(props){
    const {register,handleSubmit,formState : {errors}} = useForm();
    const onFormSubmit = (data)=>{
        props.getDataFromChild(data);
    }
    return(
        <div className="d-block mx-auto p-5 bg-white bg-opacity-25">
            <h1 className="fst-italic fw-bolder text-center" style = {{color : "#F94892"}}>Enter Names ;)</h1>
        <form onSubmit = {handleSubmit(onFormSubmit)} className="entry">
            <input type="text" placeholder="Person1" id = "person1" className = "form-control mx-auto my-3"  {...register("person1" , {required : true})}/>
            {errors.person1?.type === 'required' &&
                <p className = "text-start text-danger">*person name is required</p>
            }
            <input type="text" placeholder="Person2" id = "person2" className = "form-control mx-auto my-3"  {...register("person2" , {required : true})}/>
            {errors.person2?.type === 'required' &&
                <p className = "text-start text-danger">*person name is required</p>
            }
            <button type = "submit" className="btn btn-primary">Result</button>
        </form>
        </div>
    )
}
export default Entry;